import { Category } from "../../entities/Category";
import { getRepository, Repository } from "typeorm";
import { ICategoryRepository } from '../interfaces/ICategoriesRepository'
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(data: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name: data.name,
      description: data.description
    })
    await this.repository.save(category);
  }

  async list(): Promise<Category[]> {
    const categories = this.repository.find()
    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({
      where: {
        name: name
      }
    })
    return category;
  }
}
export { CategoriesRepository };
