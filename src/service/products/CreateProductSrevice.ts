import { IProductsRequest } from "../../Interface/IProductsInterface";

class CreateProductsService{
    async execute({name, category, description, price}: IProductsRequest){
        if(!name && !category && !description && !price){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if(price <= 0){
            throw new Error("Preço deve ser maior que zero");
        }

        var vproducts = {
            name: name,
            category: category,
            description: description,
            price: price
        };
        return vproducts;
    }
}
export {CreateProductsService};