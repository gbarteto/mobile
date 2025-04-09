import { Request, Response } from "express";
import { CreateCategoryService } from "../../service/category/CreateCategoryService";

class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const { name } = request.body;

        const createCategoryService = new CreateCategoryService();
        const category = await createCategoryService.execute({
            name:name
        });

        response.json({ message: "Categoria incluída com sucesso" });
    }
}
    export { CreateCategoryController };
