import { ListCategoriesUseCase } from "./listCategoriesUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
    const result = await listCategoriesUseCase.execute();

    return response.status(200).json({has_error: false, data: result});
  }
}
