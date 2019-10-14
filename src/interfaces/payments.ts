interface ILabeledPrice {
    label: string
    amount: number
}

interface IInvoice {
    title: string
    description: string
    start_parameter: string
    currency: string
    total_amount: number
}

interface IShippingAddress {
    country_code: string
    state: string
    city: string
    street_line1: string
    street_line2: string
    post_code: string
}

interface IOrderInfo {
    name?: string
    phone_number?: string
    email?: string
    shipping_address?: IShippingAddress
}

interface IShippingOption {
    id: string
    title: string
    prices: ILabeledPrice[]
}

interface ISuccessfulPayment {
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: IOrderInfo
    telegram_payment_charge_id: string
    provider_payment_charge_id: string
}

interface IShippingQuery {
    id: string
    from: IUser
    invoice_payload: string
    shipping_address: IShippingAddress
}

interface IPreCheckoutQuery {
    id: string
    from: IUser
    currency: string
    total_amount: number
    invoice_payload: string
    shipping_option_id?: string
    order_info?: IOrderInfo
}