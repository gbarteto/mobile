import { Request, Response } from "express";
import { CreateClientService } from "../../service/client/CreateClientService";

class CreateClientController {
    async handle(request: Request, response: Response) {
        const { name, cellphone, email, address, bairro, city, uf} = request.body;

        const createClientService = new CreateClientService();
        const client = await createClientService.execute({
            name:name,
            phone:cellphone,
            email:email,
            address:address,
            neighbor:bairro,
            city:city,
            state:uf
        });

        response.json({ message: "Registro de Cliente incluído com sucesso" });
    }
}
    export { CreateClientController };
