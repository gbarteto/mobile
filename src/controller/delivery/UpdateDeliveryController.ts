import {Request, Response} from 'express'
import { UpdateDeliveryService } from "../../service/delivery/UpdateDeliveryService"

class UpdateDeliveryController{
    async handle(request: Request, response: Response){
        const {id} = request.params
        const {sale, address, status, shipping_date, delivery_date} = request.body

        const updateDeliveryService = new UpdateDeliveryService()
        const delivery = await updateDeliveryService.execute({id, sale, address, status, shipping_date, delivery_date})
        
        response.json(delivery)
    }
}

export {UpdateDeliveryController}