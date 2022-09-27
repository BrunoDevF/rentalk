import { container } from 'tsyringe'
import { CreateCategoryUseCase } from './createCategoryUseCase'
import { Request, Response } from "express";

class CreateCategoryController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const createCategoryUseCase = container.resolve(CreateCategoryUseCase);
    
    const result = await createCategoryUseCase.execute({ name, description });

    return response.status(201).json(result);
  }
}

export { CreateCategoryController };
