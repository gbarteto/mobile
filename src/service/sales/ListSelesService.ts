class ListSalesService {
    async execute() {
        const sales = [
            {
                date:"02/02/2020",
                product:"Bola",
                client:"João",
                quantity:"2",
                total:"10 kwanzas"
            },
            {
                date:"02/02/2020",
                product:"Bola",
                client:"João",
                quantity:"2",
                total:"10 kwanzas"
            }
        ];
        return sales;
    }
}

export { ListSalesService }