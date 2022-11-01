import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./createUserUseCase";
class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);
    
    const result = await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
    });
    if(result.has_error) {
      return response.status(500).send(result);
    }
    return response.status(201).send();
  }
}
export { CreateUserController };
