import {Request, Response} from "express";

class ListSaleController{
    async handle(request: Request, response: Response){
        const sales=[
            {
                "date":"02/02/2020",
                "product":"Bola",
                "client":"João",
                "quantity":"2",
                "total":"10 kwanzas"
            },
            {
                "date":"02/02/2020",
                "product":"Bola",
                "client":"Marcos",
                "quantity":"2",
                "total":"10 kwanzas"
            }
        ]

      response.json(sales);
    };
}
    export{ListSaleController}

