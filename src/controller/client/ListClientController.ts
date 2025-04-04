import {Request, Response} from "express";

class ListClientController{
    async handle(request: Request, response: Response){
        const clients=[
            {
                "name": "Joao",
                "cellphone":"11999999999",
                "email": "joao@gmail.com",
                "address":"Rua Azul",
                "bairro":"Jardins",
                "city": "Sao Paulo",
                "uf":"SP",
                "admin": false,
                "password": "1234"
            },
            {
                "name": "Paulo",
                "cellphone":"11999999999",
                "email": "paulo@gmail.com",
                "address":"Rua Azul",
                "bairro":"Mogilar",
                "city": "Mogi",
                "uf":"SP",
                "admin": false,
                "password": "1234"
            }
        ]

      response.json(clients);
    };
}
    export{ListClientController}

