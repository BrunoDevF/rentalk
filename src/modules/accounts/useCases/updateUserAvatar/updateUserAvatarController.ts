import { Request, Response } from "express";
import { AppError } from "../../../../shared/errors/AppError";
import { container } from "tsyringe";
import { CreateUserAvatarUseCase } from "./updateUserAvatarUseCase";
interface User {
  user: any
  file: any
}
type R = { Request: Request } & User

class CreateUserAvatarController {
  async handle(request: R, response: Response): Promise<Response> {
    const avatar_file = request.file.filename
    const { id } = request?.user;

    const updateUserAvatarController = container.resolve(CreateUserAvatarUseCase);
    
    await updateUserAvatarController.execute({ user_id: id, avatar_file });

    return response.status(204).send();
  }
}
export { CreateUserAvatarController };
