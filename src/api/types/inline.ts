
interface IInlineQuery {
    id: string
    from: IUser
    location?: ILocation
    query: string
    offset: string
}

type IInlineQueryResult =
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

interface IInlineQueryResultArticle {
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

interface IInlineQueryResultPhoto {
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

interface IInlineQueryResultGif {
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

interface IInlineQueryResultMpeg4Gif {
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

interface IInlineQueryResultVideo {
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

interface IInlineQueryResultAudio {
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

interface IInlineQueryResultVoice {
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

interface IInlineQueryResultDocument {
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

interface IInlineQueryResultLocation {
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

interface IInlineQueryResultVenue {
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

interface IInlineQueryResultContact {
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

interface IInlineQueryResultGame {
    type: string
    id: string
    game_short_name: string
    reply_markup?: IInlineKeyboardMarkup
}

interface IInlineQueryResultCachedPhoto {
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

interface IInlineQueryResultCachedGif {
    type: string
    id: string
    gif_file_id: string
    title?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

interface IInlineQueryResultCachedMpeg4Gif {
    type: string
    id: string
    mpeg4_file_id: string
    title?: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

interface IInlineQueryResultCachedSticker {
    type: string
    id: string
    sticker_file_id: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

interface IInlineQueryResultCachedDocument {
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

interface IInlineQueryResultCachedVideo {
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

interface IInlineQueryResultCachedVoice {
    type: string
    id: string
    voice_file_id: string
    title: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

interface IInlineQueryResultCachedAudio {
    type: string
    id: string
    audio_file_id: string
    caption?: string
    parse_mode?: string
    reply_markup?: IInlineKeyboardMarkup
    input_message_content?: IInputMessageContent
}

type IInputMessageContent =
    IInputTextMessageContent|
    IInputLocationMessageContent|
    IInputVenueMessageContent|
    IInputContactMessageContent

interface IInputTextMessageContent {
    message_text: string
    parse_mode?: string
    disable_web_page_preview?: Boolean
}

interface IInputLocationMessageContent {
    latitude: number
    longitude: number
    live_period?: number
}

interface IInputVenueMessageContent {
    latitude: number
    longitude: number
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
}

interface IInputContactMessageContent {
    phone_number: string
    first_name: string
    last_name?: string
    vcard?: string
}

interface IChosenInlineResult {
    result_id: string
    from: IUser
    location?: ILocation
    inline_message_id?: string
    query: string
}