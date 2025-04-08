interface ISalesRequest {
    id?: string,
    date: Date,
    product: string,
    client: string,
    quantity: number,
    total: number
}

export { ISalesRequest }