import { EntityRepository, Repository } from "typeorm";
import { Delivery } from "../entities/deliveries";

@EntityRepository(Delivery)
class DeliveryRepositories extends Repository<Delivery> {

}

export{DeliveryRepositories};