import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
  sub: string;
  email: string;
}
export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("ensureAuthenticated called");
  // Receber o token
  const authToken = request.headers.authorization;

  console.log("authToken:", authToken);

  // Validar se token está preenchido
  if (!authToken) {
    response.status(401).end();
    console.log("Auth token not found");
  }else{
    //const [, token] = authToken.split(" ");
    const token = authToken;
  
    try {
      // Validar se token é válido
      const { sub,email } = verify(
        token,
        "mobilefatec"
      ) as IPayload;
  
      console.log("email:", email);
      console.log("sub:", sub);
  
      //return 
      next();
    } catch (err) {
      console.log("Error:", err);
      response.status(401).end();
    }

  }

}
