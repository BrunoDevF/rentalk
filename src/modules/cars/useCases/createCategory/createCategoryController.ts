import { Request, Response } from "express";
import { CreateCategoryUseCase } from './createCategoryUseCase'
import { container } from 'tsyringe'

class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const result = await container.resolve(CreateCategoryUseCase).execute({ name, description });
    
    // const result = await createCategoryUseCase.execute({ name, description });

    return response.status(201).json(result);
  }
}

export { CreateCategoryController };
