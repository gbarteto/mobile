import { Request, Response } from "express";
import { UpdateSalesService } from "../../service/sales/UpdateSalesService";

class UpdateSalesController {
    async handle(request: Request, response: Response) {
        const { date, product, client, quantity, total } = request.body;
        const id = request.params.id;

        const updateSalesService = new UpdateSalesService();
        const sale = await updateSalesService.execute({
            date:date,
            product:product,
            client:client,
            quantity:quantity,
            total:total
        });

        response.json({ message: "Venda "+ id + " alterado com sucesso" });
    }
}
    export { UpdateSalesController };
