import { Request, Response } from "express";

class UpdateClientController {
    async handle(request: Request, response: Response) {
        const { name, cellphone, email, address, bairro, city, uf, admin,password } = request.body;
        const id = request.params.id;
        const client = {
            id: id,
            name:name,
            cellphone:cellphone,
            email:email,
            address:address,
            bairro:bairro,
            city:city,
            uf:uf,
            admin:admin,
            password:password
        };

        response.json({ message: "Registro de Cliente "+ id + " alterado com sucesso" });
    }
}
    export { UpdateClientController };
