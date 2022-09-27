import { ICategoryRepository } from "../../repositories/interfaces/ICategoriesRepository";
import { inject, injectable } from 'tsyringe'
interface ICreateCategoryDTO {
  name: string;
  description: string;
}
@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject("CategoriesRepository")
    private categoryRepository: ICategoryRepository
    ) {}

  async execute({ description, name }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);
    console.log(categoryAlreadyExists);
    if (categoryAlreadyExists) {
      throw new Error("Category already exists");
    }

    this.categoryRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
