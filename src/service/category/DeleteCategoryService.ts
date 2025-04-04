import { ICategoryRequest } from "../../Interface/ICategoryInterface";

class DeleteCategoryService{
    async execute(id: string){
        console.log(id);
        var msg = {
            message: "Registro excluido com sucesso"
        }

        return msg;
    }
}
export {DeleteCategoryService}; 