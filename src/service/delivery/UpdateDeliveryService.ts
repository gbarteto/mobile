import { IDeliveryRequest } from "../../Interface/IDeliveryInterface";
import {getCustomRepository} from "typeorm";
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories";

class UpdateDeliveryService{
    async execute({id, sale, address, status, shipping_date, delivery_date}: IDeliveryRequest){

        const deliveryRepositories = getCustomRepository(DeliveryRepositories);
        const delivery = await deliveryRepositories.findOne(id);
        
        if(!delivery) {
            throw new Error('Entrega nao encontrada');
        }

        if(sale) delivery.sale = sale;
        if(address) delivery.address = address;
        if(status) delivery.status = status;
        if(shipping_date) delivery.shipping_date = shipping_date;
        if(delivery_date) delivery.delivery_date = delivery_date;

        await deliveryRepositories.update(id,delivery);
        return delivery;
    }
} 

export {UpdateDeliveryService}