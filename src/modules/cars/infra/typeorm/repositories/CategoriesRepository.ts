import { getRepository, Repository } from "typeorm";
import { ICategoryRepository } from '../../../repositories/interfaces/ICategoriesRepository'
import { Category } from "../entities/Category";
export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository implements ICategoryRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(data: ICreateCategoryDTO): Promise<Category> {
    const category = this.repository.create({
      name: data.name,
      description: data.description
    })
    await this.repository.save(category);
    return category
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
