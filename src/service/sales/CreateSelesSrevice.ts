import { ISalesRequest } from "../../Interface/ISalesInterface";
import { SalesRepositories } from "../../repositories/SalesRepositories";
import { ProductRepositories } from "../../repositories/ProductsRepositories";
import { ClientRepositories } from "../../repositories/ClientsRepositories";
import { getCustomRepository } from "typeorm";
import { Product } from "../../entities/products";
import { hash } from "bcryptjs";

class CreateSalesService{
    async execute({date, product, client, quantity, total}: ISalesRequest){
        if(!date && !product && !client && !quantity && !total){
            throw new Error('Preencha todos os campos');
        }

        if(quantity <= 0){
            throw new Error('Quantidade deve ser maior que zero');
        }

        if(total <= 0){
            throw new Error('Total deve ser maior que zero');
        }

        const salesRepository = getCustomRepository(SalesRepositories); 

        const sale = salesRepository.create({date, product, client, quantity, total});
        await salesRepository.save(sale);

        return sale;
    
    }
}
export {CreateSalesService};