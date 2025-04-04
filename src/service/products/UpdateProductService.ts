import { IProductsRequest } from "../../Interface/IProductsInterface";

class UpdateProductsService{
    async execute({id, name, category, description, price}: IProductsRequest){
        if(!id && !name && !category && !description && !price){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        if(price <= 0){
            throw new Error("Preço deve ser maior que zero");
        }

        var vproducts = {
            id:id,
            name: name,
            category: category,
            description : description
        };
        return vproducts;
    }
}
export {UpdateProductsService}; 