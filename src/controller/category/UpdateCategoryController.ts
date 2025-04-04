import { Request, Response } from "express";

class UpdateCategoryController {
    async handle(request: Request, response: Response) {
        const { name} = request.body;
        const id = request.params.id;
        const category = {
            id: id,
            name:name
        };

        response.json({ message: "Registro "+ id + " alterado com sucesso" });
    }
}
    export { UpdateCategoryController };
