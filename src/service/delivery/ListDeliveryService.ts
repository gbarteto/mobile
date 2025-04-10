import { getCustomRepository } from "typeorm";
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories";

class ListDeliveryService{
    async execute() {
        const deliveryRepositories = getCustomRepository(DeliveryRepositories);
        const delivery = await deliveryRepositories.find();
        return delivery;
    }
}
export{ListDeliveryService};