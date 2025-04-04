import { Request, Response } from "express";

class DeleteProductController {
    async handle(request: Request, response: Response) {
        const { name, category, description, price } = request.body;
        const id = request.params.id;

        response.json({ message: "Produto "+ id + " excluído com sucesso" });
    }
}
    export { DeleteProductController };
