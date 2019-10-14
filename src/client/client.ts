import { TelegramAPI } from "../api/api";
import { EventEmitter } from "events";


export interface ClientConfig {
    token: string
    webhook?: {
        hostname?: string
        port?: number
    }
}

export class Client extends EventEmitter {

    readonly config: ClientConfig
    readonly api: TelegramAPI

    constructor(config: ClientConfig) {
        super()
        this.config = config
        this.api = new TelegramAPI(config.token)
    }

}