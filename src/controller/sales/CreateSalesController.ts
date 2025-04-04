import { Request, Response } from "express";

class CreateSaleController {
    async handle(request: Request, response: Response) {
        const { date, product, client, quantity, total } = request.body;
        const sale = {
            date:date,
            product:product,
            client:client,
            quantity:quantity,
            total:total
        };

        response.json({ message: "Venda incluído com sucesso" });
    }
}
    export { CreateSaleController };
