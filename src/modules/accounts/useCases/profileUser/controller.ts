import { Response, Request } from "express";
import { container } from 'tsyringe';
import { ProfileUserUseCase } from './useCase';

export class ProfileUserController {

    async handle(request: Request, response: Response) {
        const profileUserUseCase = container.resolve(ProfileUserUseCase);

        const user = await profileUserUseCase.execute(request.user.id)
        return response.json(user)
    }
}