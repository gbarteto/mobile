import {IDeliveryRequest} from "../../Interface/IDeliveryInterface"
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories"
import { getCustomRepository } from "typeorm";

class CreateDeliveryService{
    async execute({sale, address, status, shipping_date, delivery_date}: IDeliveryRequest){
        if(!sale && !status && !shipping_date && !delivery_date){
            throw new Error('Preencha todos os campos');
        }

        const deliveryRepositories = getCustomRepository(DeliveryRepositories);

        const delivery = deliveryRepositories.create({sale, address, status, shipping_date, delivery_date})
        await deliveryRepositories.save(delivery);
        return delivery;
    }
}

export {CreateDeliveryService}