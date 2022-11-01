import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { inject, injectable } from 'tsyringe'
import { AppError } from "src/errors/AppError";
interface ICreateCategoryDTO {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoriesRepository: ICategoryRepository
    ) {}

  async execute({ description, name }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(name);
    
    if (categoryAlreadyExists) {
      throw new AppError("Category already exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
