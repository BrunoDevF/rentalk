import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoryRepository: CategoriesRepository) {}

  execute({ description, name }: ICreateCategoryDTO): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryService };
