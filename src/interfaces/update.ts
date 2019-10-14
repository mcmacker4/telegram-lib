

interface IUpdate {
    update_id: number
    message?: IMessage
    edited_message?: IMessage
    channel_post?: IMessage
    edited_channel_post?: IMessage
    inline_query?: IInlineQuery
    chosen_inline_result?: IChosenInlineResult
    callback_query?: ICallbackQuery
    shipping_query?: IShippingQuery
    pre_checkout_query?: IPreCheckoutQuery
    poll?: IPoll
}