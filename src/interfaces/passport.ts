
interface IPassportData {
    data: IEncryptedPassportElement[]
    credentials: IEncryptedCredentials
}

interface IPassportFile {
    file_id: string
    file_size: number
    file_date: number
}

interface IEncryptedPassportElement {
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

interface IEncryptedCredentials {
    data: string
    hash: string
    secret: string
}

type IPassportElementError =
    IPassportElementErrorDataField |
    IPassportElementErrorFrontSide |
    IPassportElementErrorReverseSide |
    IPassportElementErrorSelfie |
    IPassportElementErrorFile |
    IPassportElementErrorFiles |
    IPassportElementErrorTranslationFile |
    IPassportElementErrorTranslationFiles |
    IPassportElementErrorUnspecified

interface IPassportElementErrorDataField {
    source: string
    type: string
    field_name: string
    data_hash: string
    message: string
}

interface IPassportElementErrorFrontSide {
    source: string
    type: string
    file_hash: string
    message: string
}

interface IPassportElementErrorReverseSide {
    source: string
    type: string
    file_hash: string
    message: string
}

interface IPassportElementErrorSelfie {
    source: string
    type: string
    file_hash: string
    message: string
}

interface IPassportElementErrorFile {
    source: string
    type: string
    file_hash: string
    message: string
}

interface IPassportElementErrorFiles {
    source: string
    type: string
    file_hashes: string[]
    message: string
}

interface IPassportElementErrorTranslationFile {
    source: string
    type: string
    file_hash: string
    message: string
}

interface IPassportElementErrorTranslationFiles {
    source: string
    type: string
    file_hashes: string[]
    message: string
}

interface IPassportElementErrorUnspecified {
    source: string
    type: string
    element_hash: string
    message: string
}