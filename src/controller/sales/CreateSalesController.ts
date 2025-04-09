import { Request, Response } from "express";
import { CreateSalesService } from "../../service/sales/CreateSalesService";

class CreateSaleController {
    async handle(request: Request, response: Response) {
        const { date, product, client, quantity, total } = request.body;
        const crateSaleService = new CreateSalesService();
        const sale = await crateSaleService.execute({
            date:date,
            product:product,
            client:client,
            quantity:quantity,
            total:total
        });

        response.json({ message: "Venda incluída com sucesso" });
    }
}
    export { CreateSaleController };
