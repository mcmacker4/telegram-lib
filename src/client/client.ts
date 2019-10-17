import { TelegramAPI } from "../api/api";
import { EventEmitter } from "events";
import { Webhook, WebhookConf } from "./webhook";
import {
    IMessage,
    IInlineQuery,
    IChosenInlineResult,
    ICallbackQuery,
    IShippingQuery,
    IPreCheckoutQuery,
    IPoll
} from "../api/interfaces";

export interface ClientConfig {
    token: string
    webhook?: WebhookConf
}

export class Client extends EventEmitter {

    readonly config: ClientConfig
    readonly api: TelegramAPI

    readonly webhook?: Webhook

    constructor(config: ClientConfig) {
        super()
        this.api = new TelegramAPI(this, config.token)
        if (config.webhook) {
            this.webhook = new Webhook(this, config.webhook, () => {
                this.emit('ready')
            })
        } else {
            this.emit('debug', "No webhook configured.")
            this.emit('ready')
        }
    }

}

export declare interface Client {
    on(event: 'ready', listener: () => void): this
    on(event: 'message', listener: (message: IMessage) => void): this
    on(event: 'edited_message', listener: (message: IMessage) => void): this
    on(event: 'channel_post', listener: (message: IMessage) => void): this
    on(event: 'edited_channel_post', listener: (message: IMessage) => void): this
    on(event: 'inline_query', listener: (query: IInlineQuery) => void): this
    on(event: 'chosen_inline_result', listener: (result: IChosenInlineResult) => void): this
    on(event: 'callback_query', listener: (query: ICallbackQuery) => void): this
    on(event: 'shipping_query', listener: (query: IShippingQuery) => void): this
    on(event: 'pre_checkout_query', listener: (query: IPreCheckoutQuery) => void): this
    on(event: 'poll', listener: (poll: IPoll) => void): this

    on(event: 'debug', listener: (msg: string) => void): this
}