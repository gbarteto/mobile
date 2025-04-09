import { Request, Response } from "express";
import { UpdateClientService } from "../../service/client/UpdateClientService";

class UpdateClientController {
    async handle(request: Request, response: Response) {
        const { name, cellphone, email, address, bairro, city, uf, admin,password } = request.body;
        const id = request.params.id;

        const updateClientService = new UpdateClientService();
        const client = await updateClientService.execute({
            id: id,
            name:name,
            phone:cellphone,
            email:email,
            address:address,
            neighbor:bairro,
            city:city,
            state : uf
        });

        response.json({ message: "Registro de Cliente "+ id + " alterado com sucesso" });
    }
}
    export { UpdateClientController };
