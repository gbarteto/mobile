import {Request, Response} from 'express';
import {ListDeliveryService} from '../../service/delivery/ListDeliveryService';

class ListDeliveryController{
    async handle(request: Request, response: Response){
        const listDeliveryService = new ListDeliveryService();
        const delivery = await listDeliveryService.execute();
        response.json(delivery);
    }
}

export {ListDeliveryController};