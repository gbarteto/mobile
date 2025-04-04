interface ISalesRequest {
    id: string,
    date: string,
    product: string,
    client: string,
    quantity: number,
    total: number
}

export { ISalesRequest }