import { Client } from '../client/client'
import * as _request from 'request'

interface ApiResponse {
    ok: boolean
    description?: string
    result?: any
    error_code?: number
    parameters?: IResponseParameters
}

/* Use only for TelegramAPI methods */
function Endpoint() {
    return function (_: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) {
        descriptor.value = async function(data?: any) {
            return await this.request(propertyKey, data)
        }
    }
}

export class TelegramAPI {

    readonly base: string

    constructor(token: string) {
        this.base = `https://api.telegram.org/bot${token}/`
    }

    request(endpoint: string, data?: object): Promise<any> {
        return new Promise((resolve, reject) => {
            _request(this.base + endpoint, { qs: data, json: true }, (err, res, body) => {
                if (err) {
                    reject(err)
                } else if (res.statusCode !== 200) {
                    reject(new Error(`Request returned a ${res.statusCode} status code`))
                } else if (typeof body !== 'object') {
                    reject(new Error("Response was not a JSON object."))
                } else {
                    const response = body as ApiResponse
                    if (!response.ok) {
                        reject(new Error(response.description))
                    } else {
                        resolve(response.result)
                    }
                }
            })
        })
    }


    @Endpoint() async getMe(): Promise<IUser> { return null }

    @Endpoint() async getUpdates(_: {
        offset?: number
        limit?: number
        timeout?: number
        allowed_updates?: string[]
    }) {}

    @Endpoint() async setWebhook(_: {
        url: String
        certificate?: IInputFile
        max_connections?: number
        allowed_updates?: string[]
    }): Promise<IUpdate[]> { return null }

    @Endpoint() async deleteWebhook(): Promise<boolean> { return null }

    @Endpoint() async getWebhookInfo(): Promise<IWebhookInfo> { return null }

    @Endpoint() async sendMessage(_: {
        chat_id: number | string
        text: string
        parse_mode?: string
        disable_web_page_preview?: boolean
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }

    @Endpoint() async forwardMessage(_: {
        chat_id: number | string
        from_chat_id: number | string
        disable_notification?: boolean
        message_id: number
    }): Promise<IMessage> { return null }

    @Endpoint() async sendPhoto(_: {
        chat_id: number | string
        photo: IInputFile
        caption?: string
        parse_mode?: string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }

    @Endpoint() async sendAudio(_: {
        chat_id: number | string
        audio: IInputFile | string
        caption?: string
        parse_mode?: string
        duration?: number
        performer?: string
        title?: string
        thumb?: IInputFile | string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }

    @Endpoint() async sendDocument(_: {
        chat_id: number | string
        document: IInputFile
        thumb?: IInputFile
        caption?: string
        parse_mode?: string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendVideo(_: {
        chat_id: number | string
        video: IInputFile
        duration?: number
        width?: number
        height?: number
        thumb?: IInputFile
        caption?: string
        parse_mode?: string
        supports_streaming?: boolean
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendAnimation(_: {
        chat_id: number | string
        animation: IInputFile
        duration?: number
        width?: number
        height?: number
        thumb?: IInputFile
        caption?: string
        parse_mode?: string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendVoice(_: {
        chat_id: number | string
        voice: IInputFile
        caption?: string
        parse_mode?: string
        duration?: number
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendVideoNote(_: {
        chat_id: number | string
        video_note: IInputFile
        duration?: number
        length?: number
        thumb?: IInputFile
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendMediaGroup(_: {
        chat_id: number | string
        media: (IInputMediaPhoto | IInputMediaVideo)[]
        disable_notification?: boolean
        reply_to_message_id?: number
    }): Promise<IMessage[]> { return null }
    
    @Endpoint() async sendLocation(_: {
        chat_id: number | string
        latitude: number
        longitude: number
        live_period?: number
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async editMessageLiveLocation(_: {
        chat_id?: number | string
        message_id?: number
        inline_message_id?: string
        latitude: number
        longitude: number
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage | boolean> { return null }
    
    @Endpoint() async stopMessageLiveLocation(_: {
        chat_id?: number | string
        message_id?: number
        inline_message_id?: string
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage | boolean> { return null }
    
    @Endpoint() async sendVenue(_: {
        chat_id: number | string
        latitude: number
        longitude: number
        title: string
        address: string
        foursquare_id?: string
        foursquare_type?: string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendContact(_: {
        chat_id: number | string
        phone_number: string
        first_name: string
        last_name?: string
        vcard?: string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendPoll(_: {
        chat_id: number | string
        question: string
        options: string[]
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async sendChatAction(_: {
        chat_id: number | string
        action: 'typing'
                | 'upload_photo'
                | 'record_video'
                | 'upload_video'
                | 'record_audio'
                | 'upload_audio'
                | 'upload_document'
                | 'find_location'
                | 'record_video_note'
                | 'upload_video_note'
    }): Promise<boolean> { return null }
    
    @Endpoint() async getUserProfilePhotos(_: {
        user_id: number
        offset?: number
        limit?: number
    }): Promise<IUserProfilePhotos> { return null }
    
    @Endpoint() async getFile(_: {
        file_id: string
    }): Promise<IFile> { return null }
    
    @Endpoint() async kickChatMember(_: {
        chat_id: number | string
        user_id: number
        until_date?: number
    }): Promise<boolean> { return null }
    
    @Endpoint() async unbanChatMember(_: {
        chat_id: number | string
        user_id: number
    }): Promise<boolean> { return null }
    
    @Endpoint() async restrictChatMember(_: {
        chat_id: number | string
        user_id: number
        permissions: IChatPermissions
        until_date?: number
    }): Promise<boolean> { return null }
    
    @Endpoint() async promoteChatMember(_: {
        chat_id: number | string
        user_id: number
        can_change_info?: boolean
        can_post_messages?: boolean
        can_edit_messages?: boolean
        can_delete_messages?: boolean
        can_invite_users?: boolean
        can_restrict_members?: boolean
        can_pin_messages?: boolean
        can_promote_members?: boolean
    }): Promise<boolean> { return null }
    
    @Endpoint() async setChatPermissions(_: {
        chat_id: number | string
        permissions: IChatPermissions
    }): Promise<boolean> { return null }
    
    @Endpoint() async exportChatInviteLink(_: {
        chat_id: number | string
    }): Promise<string> { return null }
    
    @Endpoint() async setChatPhoto(_: {
        chat_id: number | string
        photo: IInputFile
    }): Promise<boolean> { return null }
    
    @Endpoint() async deleteChatPhoto(_: {
        chat_id: number | string
    }): Promise<boolean> { return null }
    
    @Endpoint() async setChatTitle(_: {
        chat_id: number | string
        title: string
    }): Promise<boolean> { return null }
    
    @Endpoint() async setChatDescription(_: {
        chat_id: number | string
        description?: string
    }): Promise<boolean> { return null }
    
    @Endpoint() async pinChatMessage(_: {
        chat_id: number | string
        message_id: number
        disable_notification?: boolean
    }): Promise<boolean> { return null }
    
    @Endpoint() async unpinChatMessage(_: {
        chat_id: number | string
    }): Promise<boolean> { return null }
    
    @Endpoint() async leaveChat(_: {
        chat_id: number | string
    }): Promise<boolean> { return null }
    
    @Endpoint() async getChat(_: {
        chat_id: number | string
    }): Promise<IChat> { return null }
    
    @Endpoint() async getChatAdministrators(_: {
        chat_id: number | string
    }): Promise<IChatMember[]> { return null }
    
    @Endpoint() async getChatMembersCount(_: {
        chat_id: number | string
    }): Promise<number> { return null }
    
    @Endpoint() async getChatMember(_: {
        chat_id: number | string
        user_id: number
    }): Promise<IChatMember> { return null }
    
    @Endpoint() async setChatStickerSet(_: {
        chat_id: number | string
        sticker_set_name: string
    }): Promise<boolean> { return null }
    
    @Endpoint() async deleteChatStickerSet(_: {
        chat_id: number | string
    }): Promise<boolean> { return null }
    
    @Endpoint() async answerCallbackQuery(_: {
        callback_query_id: string
        text?: string
        show_alert?: boolean
        url?: string
        cache_time?: number
    }): Promise<boolean> { return null }
    
    @Endpoint() async editMessageText(_: {
        chat_id?: number | string
        message_id?: number
        inline_message_id?: string
        text: string
        parse_mode?: string
        disable_web_page_preview?: Boolean
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage | boolean> { return null }
    
    @Endpoint() async editMessageCaption(_: {
        chat_id?: number | string
        message_id?: number
        inline_message_id?: string
        caption?: string
        parse_mode?: string
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage | boolean> { return null }
    
    @Endpoint() async editMessageMedia(_: {
        chat_id?: number | string
        message_id?: number
        inline_message_id?: string
        media: IInputMedia
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage | boolean> { return null }
    
    @Endpoint() async editMessageReplyMarkup(_: {
        chat_id?: number | string
        message_id?: number
        inline_message_id?: string
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage | boolean> { return null }
    
    @Endpoint() async stopPoll(_: {
        chat_id: number | string
        message_id: number
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IPoll> { return null }
    
    @Endpoint() async deleteMessage(_: {
        chat_id: number | string
        message_id: number
    }): Promise<boolean> { return null }
    
    @Endpoint() async sendSticker(_: {
        chat_id: number | string
        sticker: IInputFile | string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup | IReplyKeyboardMarkup | IReplyKeyboardRemove | IForceReply
    }): Promise<IMessage> { return null }
    
    @Endpoint() async getStickerSet(_: {
        name: string
    }): Promise<IStickerSet> { return null }
    
    @Endpoint() async uploadStickerFile(_: {
        user_id: number
        png_sticker: IInputFile
    }): Promise<IFile> { return null }
    
    @Endpoint() async createNewStickerSet(_: {
        user_id: number
        name: string
        title: string
        png_sticker: IInputFile | string
        emojis: string
        contains_masks?: boolean
        mask_position?: IMaskPosition
    }): Promise<boolean> { return null }
    
    @Endpoint() async addStickerToSet(_: {
        user_id: number
        name: string
        png_sticker: IInputFile | string
        emojis: string
        mask_position?: IMaskPosition
    }): Promise<boolean> { return null }
    
    @Endpoint() async setStickerPositionInSet(_: {
        sticker: string
        position: number
    }): Promise<boolean> { return null }
    
    @Endpoint() async deleteStickerFromSet(_: {
        sticker: string
    }): Promise<boolean> { return null }

    @Endpoint() async answerInlineQuery(_: {
        inline_query_id: string
        results: IInlineQueryResult[]
        cache_time?: number
        is_personal?: boolean
        next_offset?: string
        switch_pm_text?: string
        switch_pm_parameter?: string
    }): Promise<boolean> { return null }

    @Endpoint() async sendInvoice(_: {
        chat_id: number
        title: string
        description: string
        payload: string
        provider_token: string
        start_parameter: string
        currency: string
        prices: ILabeledPrice[]
        provider_data?: string
        photo_url?: string
        photo_size?: number
        photo_width?: number
        photo_height?: number
        need_name?: boolean
        need_phone_number?: boolean
        need_email?: boolean
        need_shipping_address?: boolean
        send_phone_number_to_provider?: boolean
        send_email_to_provider?: boolean
        is_flexible?: boolean
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage> { return null }

    @Endpoint() async answerShippingQuery(_: {
        shipping_query_id: string
        ok: boolean
        shipping_options?: IShippingOption[]
        error_message?: string
    }): Promise<boolean> { return null }
    
    @Endpoint() async answerPreCheckoutQuery(_: {
        pre_checkout_query_id: string
        ok: boolean
        error_message?: string
    }): Promise<boolean> { return null }

    @Endpoint() async setPassportDataErrors(_: {
        user_id: number
        errors: IPassportElementError[]
    }): Promise<boolean> { return null }

    @Endpoint() async sendGame(_: {
        chat_id: number
        game_short_name: string
        disable_notification?: boolean
        reply_to_message_id?: number
        reply_markup?: IInlineKeyboardMarkup
    }): Promise<IMessage> { return null }

    @Endpoint() async setGameScore(_: {
        user_id: number
        score: number
        force?: boolean
        disable_edit_message?: boolean
        chat_id?: number
        message_id?: number
        inline_message_id?: string
    }): Promise<IMessage | boolean> { return null }

    @Endpoint() async getGameHighScores(_: {
        user_id: number
        chat_id?: number
        message_id?: number
        inline_message_id?: string
    }): Promise<IGameHighScore> { return null }

}