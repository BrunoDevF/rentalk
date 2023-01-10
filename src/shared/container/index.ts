import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationRepository";
import { CategoriesRepository } from "../../modules/cars/infra/typeorm/repositories/CategoriesRepository";
import { SpecificationRepositories } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository'
import { IUserRepository } from '../../modules/accounts/repositories/interfaces/IUserRepository'
import { UserRepository } from '../../modules/accounts/infra/typeorm/repositories/UserRepository'

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
