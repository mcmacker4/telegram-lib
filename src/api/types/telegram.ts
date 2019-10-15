
interface IUser {
    id: number
    is_bot: boolean
    first_name: string
    last_name?: string
    username?: string
    language_code?: string
}

type IChatType = 'private' | 'group' | 'supergroup' | 'channel'

interface IChat {
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

interface IMessage {
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

interface IMessageEntity {
    type: string
    offset: number
    length: number
    url?: string
    user?: IUser
}

interface IPhotoSize {
    file_id: string
    width: number
    height: number
    file_size: number
}

interface IAudio {
    file_id: string
    duration: number
    performer?: string
    title?: string
    mime_type?: string
    file_size?: number
    thumb?: IPhotoSize
}

interface IDocument {
    file_id: string
    thumb?: IPhotoSize
    file_name?: string
    mime_type?: string
    file_size?: number
}

interface IVideo {
    file_id: string
    width: number
    height: number
    duration: number
    thumb?: IPhotoSize
    mime_type?: string
    file_size?: number
}

interface IAnimation {
    file_id: string
    width: number
    height: number
    duration: number
    thumb?: IPhotoSize
    file_name?: string
    mime_type?: string
    file_size?: number
}

interface IVoice {
    file_id: string
    duration: number
    mime_type?: string
    file_size?: number
}

interface IVideoNote {
    file_id: string
    length: number
    duration: number
    thumb?: IPhotoSize
    file_size?: number
}

interface IContact {
    phone_number: string
    first_name: string
    last_name?: string
    user_id?: number
    vcard?: string
}

interface ILocation {
    longitude: number
    latitude: number
}

interface IVenue {
    location: ILocation
    title: string
    address: string
    foursquare_id?: string
    foursquare_type?: string
}

interface IPollOption {
    text: string
    voter_count: number
}

interface IPoll {
    id: string
    question: string
    options: IPollOption[]
    is_closed: boolean
}

interface IUserProfilePhotos {
    total_count: number
    photos: IPhotoSize[]
}

interface IFile {
    file_id: string
    file_size?: number
    file_path?: string
}

interface IReplyKeyboardMarkup {
    keyboard: IKeyboardButton[]
    resize_keyboard?: boolean
    one_time_keyboard?: boolean
    selective?: boolean
}

interface IKeyboardButton {
    text: string
    request_contact?: boolean
    request_location?: boolean
}

interface IReplyKeyboardRemove {
    remove_keyboard: boolean
    selective?: boolean
}

interface IInlineKeyboardMarkup {
    inline_keyboard: IInlineKeyboardButton[]
}

interface IInlineKeyboardButton {
    text: string
    url?: string
    login_url?: ILoginUrl
    callback_data?: string
    switch_inline_query?: string
    switch_inline_query_current_chat?: string
    callback_game?: ICallbackGame
    pay?: boolean
}

interface ILoginUrl {
    url: string
    forward_text?: string
    bot_username?: string
    request_write_access?: boolean
}

interface ICallbackQuery {
    id: string
    from: IUser
    message?: IMessage
    inline_message_id?: string
    chat_instance: string
    data?: string
    game_short_name?: string
}

interface IForceReply {
    force_reply: boolean
    selective?: boolean
}

interface IChatPhoto {
    small_file_id: string
    big_file_id: string
}

interface IChatMember {
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

interface IChatPermissions {
    can_send_messages?: boolean
    can_send_media_messages?: boolean
    can_send_polls?: boolean
    can_send_other_messages?: boolean
    can_add_web_page_previews?: boolean
    can_change_info?: boolean
    can_invite_users?: boolean
    can_pin_messages?: boolean
}

interface IResponseParameters {
    migrate_to_chat_id?: number
    retry_after?: number
}

type IInputMedia = IInputMediaAnimation | IInputMediaDocument | IInputMediaAudio | IInputMediaPhoto | IInputMediaVideo

interface IInputMediaPhoto {
    type: string
    media: string
    caption?: string
    parse_mode?: string
}

interface IInputMediaVideo {
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

interface IInputMediaAnimation {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
    width?: number
    height?: number
    duration?: number
}

interface IInputMediaAudio {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
    duration?: number
    performer?: string
    title?: string
}

interface IInputMediaDocument {
    type: string
    media: string
    thumb?: IInputFile
    caption?: string
    parse_mode?: string
}

type IInputFile = string