import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepositories } from '../../modules/cars/repositories/implementations/SpecificationRepository'

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepositories
);
