import { CreateCategoryController } from './createCategoryController'
import { CreateCategoryUseCase } from './createCategoryUseCase';
import { CategoriesRepositoryInMemory } from '../../repositories/in-memory/CategoriesRepositoryInMemory'

const categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();

const createCategoryUseCase = new CreateCategoryUseCase(
    categoriesRepositoryInMemory
);

const createCategoryController = new CreateCategoryController(
    // createCategoryUseCase
);

export { createCategoryController }
