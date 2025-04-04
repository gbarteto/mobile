class ListProductsService {
    async execute() {
        const products = [
            {
                name:"Bola",
                category:"Esportes",
                description:"Bola de Futebol",
                price:"5 kwanzas"
            },
            {
                name:"PS5",
                category:"Videogame",
                description:"Playstation 5",
                price:"100 kwanzas"
            }
        ];
        return products;
    }
}

export { ListProductsService }