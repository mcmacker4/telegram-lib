import * as url from 'url'
import * as fs from 'fs'
import { Client } from './client';
import * as https from 'https'
import * as http from 'http'
import { IncomingMessage, ServerResponse } from 'http';
import { IUpdate } from '../api/interfaces';

export interface WebhookConf {
    /**
     * hostname, port and the token are used to generate the webhook URL
     */
    hostname: string
    port?: number
    /**
     * If true, custom ssl cert and key will be used to create the server
     */
    ssl_custom: boolean
    /**
     * Path to ssl cert and key
     */
    ssl_cert?: string
    ssl_key?: string
    /**
     * If true, HTTP will be used instead of HTTPS
     */
    use_http?: boolean
    /**
     * The allowed updates for this webhook
     */
    allowed_updates?: string[]
}

export class Webhook {

    readonly client: Client
    readonly server: http.Server | https.Server

    private url: string
    private config: WebhookConf

    constructor(client: Client, config: WebhookConf, callback: () => void) {
        this.client = client
        this.config = config
        this.url = url.format({
            protocol: 'https',
            hostname: config.hostname,
            port: config.port || 443,
            pathname: client.config.token
        })
        client.emit('debug', "Webhook url: " + this.url)
        if (config.use_http) {
            client.emit('debug', "Creating server. Using HTTP.")
            this.server = http.createServer(this.requestListener)
        } else {
            client.emit('debug', "Creating server. Using HTTPS.")
            client.emit('debug', "Cert file: " + (config.ssl_cert || "None"))
            client.emit('debug', "Key file: " + (config.ssl_cert || "None"))
            const opts = config.ssl_custom ? {
                cert: fs.readFileSync(config.ssl_cert),
                key: fs.readFileSync(config.ssl_key)
            } : {}
            this.server = https.createServer(opts, this.requestListener)
        }
        this.server.listen(client.config.webhook.port, async () => {
            client.emit('debug', "Webhook now listening.")
            await this.updateWebhook()
            callback()
        })
    }

    private async requestListener(req: IncomingMessage, res: ServerResponse) {
        if (req.method.toUpperCase() === 'POST' &&
                req.headers['content-type'] === 'application/json' &&
                req.url === this.url) {
            const data = ''
            req.on('data', chunk => data.concat(chunk.toString()))
            req.on('end', () => {
                this.processUpdate(data)
                res.end()
            })
        } else {
            res.statusCode = 403
            res.end()
        }
    }

    private async updateWebhook() {
        const whinfo = await this.client.api.getWebhookInfo()
        this.client.emit('debug', "Registered webhook is: " + whinfo.url)
        if (whinfo.url !== this.url) {
            this.client.emit('debug', "Webhook URL differs from the local one. Updating.")
            // FIXME: This should also update if allowed_updates has changed.
            await this.client.api.setWebhook({
                url: this.url,
                allowed_updates: this.config.allowed_updates || []
            })
        }
    }

    private async processUpdate(data: string) {
        const update = JSON.parse(data) as IUpdate
        if (update.message) {
            this.client.emit('message', update.message)
        } else if (update.edited_message) {
            this.client.emit('edited_message', update.edited_message)
        } else if (update.channel_post) {
            this.client.emit('channel_post', update.channel_post)
        } else if (update.edited_channel_post) {
            this.client.emit('edited_channel_post', update.edited_channel_post)
        } else if (update.inline_query) {
            this.client.emit('inline_query', update.inline_query)
        } else if (update.chosen_inline_result) {
            this.client.emit('chosen_inline_result', update.chosen_inline_result)
        } else if (update.callback_query) {
            this.client.emit('callback_query', update.callback_query)
        } else if (update.shipping_query) {
            this.client.emit('shipping_query', update.shipping_query)
        } else if (update.pre_checkout_query) {
            this.client.emit('pre_checkout_query', update.pre_checkout_query)
        } else if (update.poll) {
            this.client.emit('poll', update.poll)
        }
    }

    destroy() {
        return new Promise((resolve, reject) =>{
            this.server.close((err) => {
                if (err) reject(err)
                else resolve()
            })
        })
    }

}