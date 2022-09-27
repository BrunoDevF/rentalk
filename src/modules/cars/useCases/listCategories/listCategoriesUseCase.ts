import { Category } from "../../entities/Category";
import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";

export class ListCategoriesUseCase {
  constructor(private categoryRepository: ICategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list();
    return categories
  }
}
