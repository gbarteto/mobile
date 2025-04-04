interface IClientRequest {
    id: string,
    name: string,
    cellphone: string,
    email: string,
    address: string,
    bairro: string,
    city: string,
    uf: string,
    admin?: boolean,
    password: string
}

export {IClientRequest}