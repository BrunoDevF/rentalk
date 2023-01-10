import { getRepository, Repository } from "typeorm";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../interfaces/ICategoriesRepository";
export class CategoriesRepositoryInMemory implements ICategoryRepository {
    categories: Category[] = [];

    private repository: Repository<Category>;

    constructor() {
        this.repository = getRepository(Category)
    }
    
    async findByName(name: string): Promise<Category | any> {
        const category = await this.repository.findOne({ name })
        return category
    }
    async list(): Promise<Category[]> {
        const all = this.categories;
        return all;
    }
    async create({ description, name }: ICreateCategoryDTO): Promise<Category> {
        const category = new Category({ description, name });
        const cat = await this.repository.save(category)
        console.log('teste categoria', cat);
        // this.cars.push(car)
        return category
        // this.categories.push(category);
    }

}