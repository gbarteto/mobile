import { IClientRequest } from "../../Interface/IClientInterface";

class UpdateClientService{
    async execute({id, name, cellphone, email, address, bairro, city, uf, admin = false,password }: IClientRequest){
        if(!id && !name && !email && !cellphone && !address && !bairro && !city && !uf && !password){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        var vclient = {
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
        return vclient;
    }
}
export {UpdateClientService}; 