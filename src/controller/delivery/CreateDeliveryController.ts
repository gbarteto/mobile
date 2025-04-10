import {Request, Response} from 'express';
import { CreateDeliveryService } from "../../service/delivery/CreateDeliveryService";

class CreateDeliveryController {
    async handle(request: Request, response: Response) {
        const { sale, address, status, shipping_date, delivery_date} = request.body;

        const createDeliveryService = new CreateDeliveryService();
        const delivery = await createDeliveryService.execute({
            sale, 
            address,
            status, 
            shipping_date, 
            delivery_date
        });
        
        response.json(delivery);
    }
}

export { CreateDeliveryController }