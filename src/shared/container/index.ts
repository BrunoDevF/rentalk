import "reflect-metadata"
import { container } from 'tsyringe'

import { ICategoryRepository } from '../../modules/cars/repositories/interfaces/ICategoriesRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'

container.registerSingleton<ICategoryRepository>(
    "CategoriesRepository",
    CategoriesRepository
);