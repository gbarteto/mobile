import { ISalesRequest } from "../../Interface/ISalesInterface";

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


        var vsales = {
            date: date,
            product : product,
            client : client,
            quantity : quantity,
            total : total
        };
        return vsales;
    }
}
export {CreateSalesService};