import { IProductsRequest } from "../../Interface/IProductsInterface";

class DeleteProductsService{
    async execute(id: string){
        console.log(id);
        var msg = {
            message: "Registro excluido com sucesso"
        }

        return msg;
    }
}
export {DeleteProductsService}; 