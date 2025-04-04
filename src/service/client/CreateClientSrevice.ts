import { IClientRequest } from "../../Interface/IClientInterface";

class CreateClientService{
    async execute({name, cellphone, email, address, bairro, city, uf, admin = false, password}: IClientRequest){
        if(!name && !email && !cellphone && !address && !bairro && !city && !uf && !password){
            throw new Error("Todos os campos devem ser preenchidos");
        }

        var vclient = {
            name:name,
            cellphone:cellphone,
            email:email,
            adress:address,
            bairro:bairro,
            city:city,
            uf:uf,
            admin:admin,
            password:password
        };
        return vclient;
    }
}
export {CreateClientService};