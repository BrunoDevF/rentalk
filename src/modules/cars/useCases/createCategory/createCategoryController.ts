import { Request, Response } from "express";
import { CreateCategoryUseCase } from './createCategoryUseCase'
import { container } from 'tsyringe'

import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory'

const categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();

const createCategoryUseCase = new CreateCategoryUseCase(
    categoriesRepositoryInMemory
);


class CreateCategoryController {
  constructor(
    private createCategoryUseCase: CreateCategoryUseCase
  ){ }
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;
    // console.log(createCategoryUseCase.execute({ name, description }));
    
    const result = await this.createCategoryUseCase.execute({ name, description });
    if(result.has_error) {
      return response.status(400).json(result.error);
    }
    return response.status(201).json(result);
  }
}

export { CreateCategoryController };
