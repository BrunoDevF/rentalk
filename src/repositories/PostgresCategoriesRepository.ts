import { Category } from "../model/Category";
import {
  ICategoryRepository,
  ICreateCategoryDTO,
} from "./interfaces/ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoryRepository {
  findByName(name: string): Category {
    throw new Error("Method not implemented.");
  }
  list(): Category[] {
    throw new Error("Method not implemented.");
  }
  create({ description, name }: ICreateCategoryDTO): void {
    throw new Error("Method not implemented.");
  }
}

export { PostgresCategoriesRepository };
