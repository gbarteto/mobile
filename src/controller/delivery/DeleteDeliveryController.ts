import {Request , Response} from 'express'
import { DeleteDeliveryService } from "../../service/delivery/DeleteDeliveryService"

class DeleteDeliveryController{
    async handle(request: Request, response: Response){
        const {id} = request.params

        const deleteDeliveryService = new DeleteDeliveryService()
        const delivery = await deleteDeliveryService.execute(id)
        
        response.json(delivery)
    }
} export {DeleteDeliveryController}