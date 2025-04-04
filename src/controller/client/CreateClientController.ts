import { Request, Response } from "express";

class CreateClientController {
    async handle(request: Request, response: Response) {
        const { name, cellphone, email, address, bairro, city, uf, admin,password } = request.body;
        const client = {
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

        response.json({ message: "Registro de Cliente incluído com sucesso" });
    }
}
    export { CreateClientController };
