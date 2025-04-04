import { ISalesRequest } from "../../Interface/ISalesInterface";

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
        

        var vsales = {
            id:id,
            date: date,
            product : product,
            client : client,
            quantity : quantity,
            total : total
        };
        return vsales;
    }
}
export {UpdateSalesService}; 