import { ICategoryRequest } from "../../Interface/ICategoryInterface";

class UpdateCategoryService{
    async execute({id, name}: ICategoryRequest){
        if(!id && !name){
            throw new Error("ID e Nome incorreto");
        }

        var vcategory = {
            id:id,
            name: name
        };
        return vcategory;
    }
}
export {UpdateCategoryService}; 