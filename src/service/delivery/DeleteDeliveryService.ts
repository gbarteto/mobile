import { getCustomRepository } from "typeorm";
import { DeliveryRepositories } from "../../repositories/DeliveryRepositories";

class DeleteDeliveryService {
    async execute(id : string) {
        const deliveryRepositories = getCustomRepository(DeliveryRepositories);
        const delivery = await deliveryRepositories.findOne(id);

        if(!delivery) return { message : "Entrega nao encontrada"};

        const msg = await deliveryRepositories.remove(delivery);
        return {message : "Entrega excluida com sucesso"}
    }
}
export { DeleteDeliveryService };