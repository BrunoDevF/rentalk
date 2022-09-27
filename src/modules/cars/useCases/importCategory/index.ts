import { ImportCategoryController } from './importCategoryControlller'
import { ImportCategoryUseCase } from './importCategoryUseCase'
import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository'

const categoriesRepository = null // new CategoriesRepository();

const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }