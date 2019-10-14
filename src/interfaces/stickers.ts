

interface ISticker {
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

interface IStickerSet {
    name: string
    title: string
    is_animated: Boolean
    contains_masks: Boolean
    stickers: ISticker[]
}

interface IMaskPosition {
    point: string
    x_shift: number
    y_shift: number
    scale: number
}