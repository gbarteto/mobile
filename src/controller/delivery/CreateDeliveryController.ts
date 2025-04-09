import {Request, Response} from 'express';
import { CreateDeliveryService } from "../../service/delivery/CreateDeliveryService";

class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { sale, status, shippingDate, deliveryDate} = request.body;
        const createDeliveryService = new CreateDeliveryService();
        const delivery = await createDeliveryService.execute({
            sale, 
            status, 
            shippingDate, 
            deliveryDate
        });
        return response.json(delivery);
    }
}

export { CreateDeliveryController }