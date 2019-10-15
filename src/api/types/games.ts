interface IGame {
    title: string
    description: string
    photo: IPhotoSize[]
    text?: string
    text_entities?: IMessageEntity[]
    animation?: Animation
}

interface ICallbackGame {}

interface IGameHighScore {
    position: number
    user: IUser
    score: number
}