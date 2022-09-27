import { CreateCategoryUseCase } from "./createCategoryUseCase";
import { Request, Response } from "express";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const result = await this.createCategoryUseCase.execute({ name, description });

    return response.status(201).json(result);
  }
}

export { CreateCategoryController };
