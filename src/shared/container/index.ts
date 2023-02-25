import { container } from "tsyringe";

import { ICategoryRepository } from "../../modules/cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/cars/repositories/interfaces/ISpecificationRepository";
import { CategoriesRepositoryInMemory } from "../../modules/cars/repositories/in-memory/CategoriesRepositoryInMemory";
import { SpecificationRepositories } from '../../modules/cars/infra/typeorm/repositories/SpecificationRepository'
import { IUserRepository } from '../../modules/accounts/repositories/interfaces/IUserRepository'
import { UserRepository } from '../../modules/accounts/infra/typeorm/repositories/UserRepository'
import { ICarsRepository } from '../../modules/cars/repositories/interfaces/ICarsRepository';
import { CarsRepositoryInMemory } from '../../modules/cars/repositories/in-memory/CarsRepositoryInMemory';
import { ICarsImageRepository } from "src/modules/cars/repositories/interfaces/ICarsImageRepository";
import { CarsImageRepository } from "../../modules/cars/repositories/in-memory/CarsImageRepository";
import { IRentalsRepository } from '../../modules/rentals/infra/typeorm/interfaces/IRentalsRepository';
import { RentalsRepository } from '../../modules/rentals/infra/typeorm/repositories/RentalsRepository';
import { IDateProvider } from "./providers/dateProvider/IDateProvider";
import { DayJsDateProvider } from "./providers/dateProvider/implementations/dayJsDateProvider";

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

container.registerSingleton<ICarsImageRepository>(
  "CarsImagesRepository",
  CarsImageRepository
)

container.registerSingleton<IRentalsRepository>(
  "RentalsRepository",
  RentalsRepository
)

container.registerSingleton<IDateProvider>(
  "DayJsDateProvider",
  DayJsDateProvider
)