import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationRepositories } from '../../modules/cars/repositories/implementations/SpecificationRepository'

import { IUserRepository } from "src/modules/accounts/repositories/interfaces/IUserRepository";
import { UserRepository } from '../../modules/accounts/repositories/implementations/UserRepository'

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepositories
);

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)
