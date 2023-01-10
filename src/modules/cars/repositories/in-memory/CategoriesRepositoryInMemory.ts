import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";
export class CategoriesRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];
    
    async findByName(name: string): Promise<Category> {
        const category = this.categories.find(c => c.name === name);
        return category;
    }
    async list(): Promise<Category[]> {
        const all = this.categories;
        return all;
    }
    async create({ description, name }: ICreateCategoryDTO): Promise<void> {
        const category = new Category({ description, name });
        this.categories.push(category);
    }

}