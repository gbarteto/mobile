import { Request, Response } from "express";

class DeleteSaleController {
    async handle(request: Request, response: Response) {
        const { date, product, client, quantity, total } = request.body;
        const id = request.params.id;

        response.json({ message: "Venda "+ id + " excluído com sucesso" });
    }
}
    export { DeleteSaleController };
