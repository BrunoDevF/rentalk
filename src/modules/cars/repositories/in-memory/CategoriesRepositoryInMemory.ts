import { getConnection, getRepository, Repository } from "typeorm";
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
        const all = await this.repository.find()
        return all;
    }
    async create({ description, name }: ICreateCategoryDTO): Promise<Category> {
        const category = new Category({ description, name });
        const cat = await this.repository.save(category)
        console.log('teste categoria', cat);
        return cat
    }

}