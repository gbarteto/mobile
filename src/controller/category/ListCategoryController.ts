import {Request, Response} from "express";

class ListCategoryController{
    async handle(request: Request, response: Response){
        const category=[
            {
                "name": "Esportes"
            },
            {
                "name": "Videogame"
            }
        ]

      response.json(category);
    };
}
    export{ListCategoryController}

