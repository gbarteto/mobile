import { Request, Response } from "express";

class DeleteClientController {
    async handle(request: Request, response: Response) {
        const { name, cellphone, email, address, bairro, city, uf, admin,password } = request.body;
        const id = request.params.id;

        response.json({ message: "Registro de Cliente "+ id + " excluído com sucesso" });
    }
}
    export { DeleteClientController };
