import { ISalesRequest } from "../../Interface/ISalesInterface";

class DeleteSalesService{
    async execute(id: string){
        console.log(id);
        var msg = {
            message: "Registro excluido com sucesso"
        }

        return msg;
    }
}
export {DeleteSalesService}; 