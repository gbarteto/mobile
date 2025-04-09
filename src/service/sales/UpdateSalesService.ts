import { ISalesRequest } from "../../Interface/ISalesInterface";
import { SalesRepositories } from "../../repositories/SalesRepositories";
import { getCustomRepository } from "typeorm";

class UpdateSalesService{
    async execute({id, date, product, client, quantity, total}: ISalesRequest){
        if(!id && !date && !product && !client && !quantity && !total){
            throw new Error('Preencha todos os campos');
        }

        if(quantity <= 0){
            throw new Error('Quantidade deve ser maior que zero');
        }
    
        if(total <= 0){
            throw new Error('Total deve ser maior que zero');
        }

        const salesRepository = getCustomRepository(SalesRepositories);
        const salesExists = await salesRepository.findOne(id);
        if(!salesExists){
            throw new Error('Venda nao encontrada');
        }

        if(client){
            const clientRepository = getCustomRepository(SalesRepositories);
            const clientExists = await clientRepository.findOne(client);
            if(!clientExists){
                throw new Error('Cliente nao encontrado');
            }

            salesExists
        }

        salesExists.date = date;
        salesExists.product = product;
        salesExists.client = client;
        salesExists.quantity = quantity;
        salesExists.total = total;
        return await salesRepository.update(id, salesExists);
    }
}
export {UpdateSalesService}; 