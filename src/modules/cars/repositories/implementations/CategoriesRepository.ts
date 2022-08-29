import { Category } from "../../model/Category";

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class CategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      this.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create(data: ICreateCategoryDTO): void {
    const category = new Category(data);
    console.log('ta criando');
    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name === name);
    return category;
  }
}
export { CategoriesRepository };
