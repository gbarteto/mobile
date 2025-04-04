import {Request, Response} from "express";

class ListProductController{
    async handle(request: Request, response: Response){
        const products=[
            {
                "name":"Bola",
                "category":"Esportes",
                "description":"Bola de Futebol",
                "price":"5 kwanzas"
            },
            {
                "name":"PS5",
                "category":"Videogame",
                "description":"Playstation 5",
                "price":"100 kwanzas"
            }
        ]

      response.json(products);
    };
}
    export{ListProductController}

