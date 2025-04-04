import { ICategoryRequest } from "../../Interface/ICategoryInterface";

class CreateCategoryService{
    async execute({name}: ICategoryRequest){
        if(!name){
            throw new Error("Nome incorreto");
        }

        var vcategory = {
            name: name
        };
        return vcategory;
    }
}
export {CreateCategoryService};