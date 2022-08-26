import { ListCategoriesUseCase } from './listCategoriesUseCase'
import { ListCategoriesController } from './listCategoriesController'
import { CategoriesRepository } from '../../repositories/CategoriesRepository'

const categoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);


export { listCategoriesController }