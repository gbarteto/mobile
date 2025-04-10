interface IDeliveryRequest {
    id? : string,
    sale: string,
    address: string,
    status: string,
    shipping_date: Date,
    delivery_date: Date
}

export {IDeliveryRequest}