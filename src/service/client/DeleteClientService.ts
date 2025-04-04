import { IClientRequest } from "../../Interface/IClientInterface";

class DeleteClientService{
    async execute(id: string){
        console.log(id);
        var msg = {
            message: "Registro excluido com sucesso"
        }

        return msg;
    }
}
export {DeleteClientService}; 