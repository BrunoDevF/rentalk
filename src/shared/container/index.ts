import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationRepository";
import { CategoriesRepositoryInMemory } from "../../modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { SpecificationRepositories } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository'
import { IUserRepository } from '../../modules/accounts/repositories/interfaces/IUserRepository'
import { UserRepository } from '../../modules/accounts/infra/typeorm/repositories/UserRepository'
import { ICarsRepository } from '../../modules/cars/repositories/interfaces/ICarsRepository';
import { CarsRepositoryInMemory } from '../../modules/cars/repositories/in-memory/CarsRepositoryInMemory';

container.registerSingleton<ICategoryRepository>(
  "CategoriesRepositoryInMemory",
  CategoriesRepositoryInMemory
);

container.registerSingleton<ISpecificationRepository>(
  "SpecificationRepository",
  SpecificationRepositories
);

container.registerSingleton<IUserRepository>(
  "UserRepository",
  UserRepository
)

container.registerSingleton<ICarsRepository>(
  "CarsRepository",
  CarsRepositoryInMemory
)