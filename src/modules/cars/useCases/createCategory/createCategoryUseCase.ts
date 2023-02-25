import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";
import "reflect-metadata";

import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../shared/errors/AppError";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepositoryInMemory")
    private categoriesRepository: ICategoryRepository
  ) {}

  async execute({ description, name }: ICreateCategoryDTO): Promise<any> {
    try {
      const categoryAlreadyExists = await this.categoriesRepository.findByName(
        name
      );
      
      if (categoryAlreadyExists) {
        console.log('aaaa');
        throw new AppError("Category already exists");
      }
      
      const category = this.categoriesRepository.create({ name, description });
      console.log(category);
      return {has_error: false, error:'', data: category}
    } catch (error) {
      return {has_error: true, error:error}
    }
  }
}

