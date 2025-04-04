import { Request, Response } from "express";

class DeleteCategoryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;
        const id = request.params.id;

        response.json({ message: "Categoria "+ id + " excluído com sucesso" });
    }
}
    export { DeleteCategoryController };
