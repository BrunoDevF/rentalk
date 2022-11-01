import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserCase } from "./AuthenticateUserCase";

export class AuthenticateController {
    async handle(request: Request, response: Response): Promise<Response>{
        const { password, email } = request.body;

        const AuthenticateUseCase = container.resolve(AuthenticateUserCase)
        const authenticateInfo = await AuthenticateUseCase.execute({ password, email });
        return response.json(authenticateInfo);
    }
}