
export interface IUser {
    id: number
    is_bot: boolean
    first_name: string
    last_name?: string
    username?: string
    language_code?: string
}

export type IChatType = 'private' | 'group' | 'supergroup' | 'channel'

export interface IChat {
    id: number
    type: IChatType
    title?: string
    username?: string
    first_name?: string
    last_name?: string
    photo?: IChatPhoto
    description?: string
    invite_link?: string
    pinned_message?: IMessage
    permissions?: IChatPermissions
    sticker_set_name?: string
    can_set_sticker_set?: boolean
}

export interface IMessage {
    message_id: number
    from?: IUser
    date: number
    chat: IChat
    forward_from?: IUser
    forward_from_chat?: IChat
    forward_from_message_id?: number
    forward_signature?: string
    forward_sender_name?: string
    forward_date?: number
    reply_to_message?: IMessage
    edit_date?: number
    media_group_id?: string
    author_signature?: string
    text?: string
    entities?: IMessageEntity[]
    caption_entities?: IMessageEntity[]
    audio?: IAudio
    document?: IDocument
    animation?: Animation
    game?: IGame
    photo?: IPhotoSize[]
    sticker?: ISticker
    video?: IVideo
    voice?: IVoice
    video_note?: IVideoNote
    caption?: string
    contact?: IContact
    location?: ILocation
    venue?: IVenue
    poll?: IPoll
    new_chat_members?: IUser[]
    left_chat_member?: IUser
    new_chat_title?: string
    new_chat_photo?: IPhotoSize[]
    delete_chat_photo?: boolean
    group_chat_created?: boolean
    supergroup_chat_created?: boolean
    channel_chat_created?: boolean
    migrate_to_chat_id?: number
    migrate_from_chat_id?: number
    pinned_message?: IMessage
    invoice?: IInvoice
    successful_payment?: ISuccessfulPayment
    connected_website?: string
    passport_data?: IPassportData
    reply_markup?: IInlineKeyboardMarkup
}

export interface IMessageEntity {
    type: string
    offset: number
    length: number
    url?: string
    user?: IUser
}

export interface IPhotoSize {
    file_id: string
    width: number
    height: number
    file_size: number
}

export interface IAudio {
    file_id: string
    duration: number
    performer?: string
    title?: string
    mime_type?: string
    file_size?: number
    thumb?: IPhotoSize
}

export interface IDocument {
    file_id: string
    thumb?: IPhotoSize
    file_name?: string
    mime_type?: string
    file_size?: number
}

export interface IVideo {
    file_id: string
    width: number
    height: number
    duration: number
    thumb?: IPhotoSize
    mime_type?: string
    file_size?: number
}

export interface IAnimation {
    file_id: string
    width: number
    height: number
    duration: number
    thumb?: IPhotoSize
    file_name?: string
    mime_type?: string
    file_size?: number
}

export interface IVoice {
    file_id: string
    duration: number
    mime_type?: string
    file_size?: number
}

export interface IVideoNote {
    file_id: string
    length: number
    duration: number
    thumb?: IPhotoSize
    file_size?: number
}

export interface IContact {
    phone_number: string
    first_name: string
    last_name?: string
    user_id?: number
    vcard?: string
}

export interface ILocation {
    longitude: number
    latitude: number
}

export interface IVenue {
    location: ILocation
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
}

export interface IPollOption {
    text: string
    voter_count: number
}

export interface IPoll {
    id: string
    question: string
    options: IPollOption[]
    is_closed: boolean
}

export interface IUserProfilePhotos {
    total_count: number
    photos: IPhotoSize[]
}

export interface IFile {
    file_id: string
    file_size?: number
    file_path?: string
}

export interface IReplyKeyboardMarkup {
    keyboard: IKeyboardButton[]
    resize_keyboard?: boolean
    one_time_keyboard?: boolean
    selective?: boolean
}

export interface IKeyboardButton {
    text: string
    request_contact?: boolean
    request_location?: boolean
}

export interface IReplyKeyboardRemove {
    remove_keyboard: boolean
    selective?: boolean
}

export interface IInlineKeyboardMarkup {
    inline_keyboard: IInlineKeyboardButton[]
}

export interface IInlineKeyboardButton {
    text: string
    url?: string
    login_url?: ILoginUrl
    callback_data?: string
    switch_inline_query?: string
    switch_inline_query_current_chat?: string
    callback_game?: ICallbackGame
    pay?: boolean
}

export interface ILoginUrl {
    url: string
    forward_text?: string
    bot_username?: string
    request_write_access?: boolean
}

export interface ICallbackQuery {
    id: string
    from: IUser
    message?: IMessage
    inline_message_id?: string
    chat_instance: string
    data?: string
    game_short_name?: string
}

export interface IForceReply {
    force_reply: boolean
    selective?: boolean
}

export interface IChatPhoto {
    small_file_id: string
    big_file_id: string
}

export interface IChatMember {
    user: IUser
    status: string
    until_date?: number
    can_be_edited?: boolean
    can_post_messages?: boolean
    can_edit_messages?: boolean
    can_delete_messages?: boolean
    can_restrict_members?: boolean
    can_promote_members?: boolean
    can_change_info?: boolean
    can_invite_users?: boolean
    can_pin_messages?: boolean
    is_member?: boolean
    can_send_messages?: boolean
    can_send_media_messages?: boolean
    can_send_polls?: boolean
    can_send_other_messages?: boolean
    can_add_web_page_previews?: boolean
}

export interface IChatPermissions {
    can_send_messages?: boolean
    can_send_media_messages?: boolean
    can_send_polls?: boolean
    can_send_other_messages?: boolean
    can_add_web_page_previews?: boolean
    can_change_info?: boolean
    can_invite_users?: boolean
    can_pin_messages?: boolean
}

export interface IResponseParameters {
    migrate_to_chat_id?: number
    retry_after?: number
}

export type IInputMedia = IInputMediaAnimation | IInputMediaDocument | IInputMediaAudio | IInputMediaPhoto | IInputMediaVideo

export interface IInputMediaPhoto {
    type: string
    media: string
    caption?: string
    parse_mode?: string
}

export interface IInputMediaVideo {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
    width?: number
    height?: number
    duration?: number
    supports_streaming?: boolean
}

export interface IInputMediaAnimation {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
    width?: number
    height?: number
    duration?: number
}

export interface IInputMediaAudio {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
    duration?: number
    performer?: string
    title?: string
}

export interface IInputMediaDocument {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
}

export type IInputFile = string

export interface IGame {
    title: string
    description: string
    photo: IPhotoSize[]
    text?: string
    text_entities?: IMessageEntity[]
    animation?: Animation
}

export interface ICallbackGame {}

export interface IGameHighScore {
    position: number
    user: IUser
    score: number
}


export interface IInlineQuery {
    id: string
    from: IUser
    location?: ILocation
    query: string
    offset: string
}

export type IInlineQueryResult =
    IInlineQueryResultCachedAudio |
    IInlineQueryResultCachedDocument |
    IInlineQueryResultCachedGif |
    IInlineQueryResultCachedMpeg4Gif |
    IInlineQueryResultCachedPhoto |
    IInlineQueryResultCachedSticker |
    IInlineQueryResultCachedVideo |
    IInlineQueryResultCachedVoice |
    IInlineQueryResultArticle |
    IInlineQueryResultAudio |
    IInlineQueryResultContact |
    IInlineQueryResultGame |
    IInlineQueryResultDocument |
    IInlineQueryResultGif |
    IInlineQueryResultLocation |
    IInlineQueryResultMpeg4Gif |
    IInlineQueryResultPhoto |
    IInlineQueryResultVenue |
    IInlineQueryResultVideo |
    IInlineQueryResultVoice

export interface IInlineQueryResultArticle {
    type: string
    id: string
    title: string
    input_message_content: IInputMessageContent
    reply_markup?: IInlineKeyboardMarkup
    url?: string
    hide_url?: Boolean
    description?: string
    thumb_url?: string
    thumb_width?: number
    thumb_height?: number
}

export interface IInlineQueryResultPhoto {
    type: string
    id: string
    photo_url: string
    thumb_url: string
    photo_width?: number
    photo_height?: number
    title?: string
    description?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultGif {
    type: string
    id: string
    gif_url: string
    gif_width?: number
    gif_height?: number
    gif_duration?: number
    thumb_url: string
    title?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultMpeg4Gif {
    type: string
    id: string
    mpeg4_url: string
    mpeg4_width?: number
    mpeg4_height?: number
    mpeg4_duration?: number
    thumb_url: string
    title?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultVideo {
    type: string
    id: string
    video_url: string
    mime_type: string
    thumb_url: string
    title: string
    caption?: string
    parse_mode?: string
    video_width?: number
    video_height?: number
    video_duration?: number
    description?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultAudio {
    type: string
    id: string
    audio_url: string
    title: string
    caption?: string
    parse_mode?: string
    performer?: string
    audio_duration?: number
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultVoice {
    type: string
    id: string
    voice_url: string
    title: string
    caption?: string
    parse_mode?: string
    voice_duration?: number
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultDocument {
    type: string
    id: string
    title: string
    caption?: string
    parse_mode?: string
    document_url: string
    mime_type: string
    description?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
    thumb_url?: string
    thumb_width?: number
    thumb_height?: number
}

export interface IInlineQueryResultLocation {
    type: string
    id: string
    latitude: number
    longitude: number
    title: string
    live_period?: number
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
    thumb_url?: string
    thumb_width?: number
    thumb_height?: number
}

export interface IInlineQueryResultVenue {
    type: string
    id: string
    latitude: number
    longitude: number
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
    thumb_url?: string
    thumb_width?: number
    thumb_height?: number
}

export interface IInlineQueryResultContact {
    type: string
    id: string
    phone_number: string
    first_name: string
    last_name?: string
    vcard?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
    thumb_url?: string
    thumb_width?: number
    thumb_height?: number
}

export interface IInlineQueryResultGame {
    type: string
    id: string
    game_short_name: string
    reply_markup?: IInlineKeyboardMarkup
}

export interface IInlineQueryResultCachedPhoto {
    type: string
    id: string
    photo_file_id: string
    title?: string
    description?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedGif {
    type: string
    id: string
    gif_file_id: string
    title?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedMpeg4Gif {
    type: string
    id: string
    mpeg4_file_id: string
    title?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedSticker {
    type: string
    id: string
    sticker_file_id: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedDocument {
    type: string
    id: string
    title: string
    document_file_id: string
    description?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedVideo {
    type: string
    id: string
    video_file_id: string
    title: string
    description?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedVoice {
    type: string
    id: string
    voice_file_id: string
    title: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export interface IInlineQueryResultCachedAudio {
    type: string
    id: string
    audio_file_id: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

export type IInputMessageContent =
    IInputTextMessageContent|
    IInputLocationMessageContent|
    IInputVenueMessageContent|
    IInputContactMessageContent

export interface IInputTextMessageContent {
    message_text: string
    parse_mode?: string
    disable_web_page_preview?: Boolean
}

export interface IInputLocationMessageContent {
    latitude: number
    longitude: number
    live_period?: number
}

export interface IInputVenueMessageContent {
    latitude: number
    longitude: number
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
}

export interface IInputContactMessageContent {
    phone_number: string
    first_name: string
    last_name?: string
    vcard?: string
}

export interface IChosenInlineResult {
    result_id: string
    from: IUser
    location?: ILocation
    inline_message_id?: string
    query: string
}

export interface IPassportData {
    data: IEncryptedPassportElement[]
    credentials: IEncryptedCredentials
}

export interface IPassportFile {
    file_id: string
    file_size: number
    file_date: number
}

export interface IEncryptedPassportElement {
    type: string
    data?: string
    phone_number?: string
    email?: string
    files?: IPassportFile[]
    front_side?: IPassportFile
    reverse_side?: IPassportFile
    selfie?: IPassportFile
    translation?: IPassportFile[]
    hash: string
}

export interface IEncryptedCredentials {
    data: string
    hash: string
    secret: string
}

export type IPassportElementError =
    IPassportElementErrorDataField |
    IPassportElementErrorFrontSide |
    IPassportElementErrorReverseSide |
    IPassportElementErrorSelfie |
    IPassportElementErrorFile |
    IPassportElementErrorFiles |
    IPassportElementErrorTranslationFile |
    IPassportElementErrorTranslationFiles |
    IPassportElementErrorUnspecified

export interface IPassportElementErrorDataField {
    source: string
    type: string
    field_name: string
    data_hash: string
    message: string
}

export interface IPassportElementErrorFrontSide {
    source: string
    type: string
    file_hash: string
    message: string
}

export interface IPassportElementErrorReverseSide {
    source: string
    type: string
    file_hash: string
    message: string
}

export interface IPassportElementErrorSelfie {
    source: string
    type: string
    file_hash: string
    message: string
}

export interface IPassportElementErrorFile {
    source: string
    type: string
    file_hash: string
    message: string
}

export interface IPassportElementErrorFiles {
    source: string
    type: string
    file_hashes: string[]
    message: string
}

export interface IPassportElementErrorTranslationFile {
    source: string
    type: string
    file_hash: string
    message: string
}

export interface IPassportElementErrorTranslationFiles {
    source: string
    type: string
    file_hashes: string[]
    message: string
}

export interface IPassportElementErrorUnspecified {
    source: string
    type: string
    element_hash: string
    message: string
}

export interface ILabeledPrice {
    label: string
    amount: number
}

export interface IInvoice {
    title: string
    description: string
    start_parameter: string
    currency: string
    total_amount: number
}

export interface IShippingAddress {
    country_code: string
    state: string
    city: string
    street_line1: string
    street_line2: string
    post_code: string
}

export interface IOrderInfo {
    name?: string
    phone_number?: string
    email?: string
    shipping_address?: IShippingAddress
}

export interface IShippingOption {
    id: string
    title: string
    prices: ILabeledPrice[]
}

export interface ISuccessfulPayment {
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: IOrderInfo
    telegram_payment_charge_id: string
    provider_payment_charge_id: string
}

export interface IShippingQuery {
    id: string
    from: IUser
    invoice_payload: string
    shipping_address: IShippingAddress
}

export interface IPreCheckoutQuery {
    id: string
    from: IUser
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: IOrderInfo
}

export interface ISticker {
    file_id: string
    width: number
    height: number
    is_animated: Boolean
    thumb?: IPhotoSize
    emoji?: string
    set_name?: string
    mask_position?: IMaskPosition
    file_size?: number
}

export interface IStickerSet {
    name: string
    title: string
    is_animated: Boolean
    contains_masks: Boolean
    stickers: ISticker[]
}

export interface IMaskPosition {
    point: string
    x_shift: number
    y_shift: number
    scale: number
}

export interface IUpdate {
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

export interface IWebhookInfo {
    url: string
    has_custom_certificate: boolean
    pending_update_count: number
    last_error_date?: number
    last_error_message?: string
    max_connections?: number
    allowed_updates?: string[]
}