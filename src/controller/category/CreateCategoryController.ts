import { Request, Response } from "express";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const category = {
            name:name
        };

        response.json({ message: "Categoria incluída com sucesso" });
    }
}
    export { CreateCategoryController };
