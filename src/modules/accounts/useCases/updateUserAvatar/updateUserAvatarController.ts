import { Request, Response } from "express";
import { AppError } from "../../../../errors/AppError";
import { container } from "tsyringe";
import { CreateUserAvatarUseCase } from "./updateUserAvatarUseCase";



class CreateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const avatar_file = request.file.filename
    const { id } = request.user;

    const updateUserAvatarController = container.resolve(CreateUserAvatarUseCase);
    
    await updateUserAvatarController.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}
export { CreateUserAvatarController };
