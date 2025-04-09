import {Request, Response} from 'express';
import {CreateDeliveryService} from '../../service/delivery/CreateDeliveryService';

class ListDeliveryController{
    async handle(request: Request, response: Response){
        const listDeliveryService = new CreateDeliveryService();
        const delivery = await listDeliveryService.execute();
        return response.json(delivery);
    }
}

export {ListDeliveryController};