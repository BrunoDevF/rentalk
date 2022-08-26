import { CreateCategoryUseCase } from "./createCategoryUseCase";
import { Request, Response } from "express";

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;

    const result = this.createCategoryUseCase.execute({ name, description });

    return response.status(201).json(result);
  }
}

export { CreateCategoryController };
