import { CreateCarSpecificationUseCase } from "./useCase";
import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { AppError } from "../../../../shared/errors/AppError";
import { SpecificationRepositories } from "../../infra/typeorm/repositories/SpecificationRepository";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;
let specificationRepository: SpecificationRepositories;

describe("Create Car specification", () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    specificationRepository = new SpecificationRepositories();
    createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
      carsRepositoryInMemory,
      specificationRepository
    );
  });

  it("should not be able to add a new specification to a now-existent car", async () => {
    expect(async () => {
      await createCarSpecificationUseCase.execute({
        car_id: "123",
        specifications_id: ["321"],
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should be able to add a new specification to the car", async () => {
    const car = await carsRepositoryInMemory.create({
      name: "Name Car",
      description: "description car",
      daily_rate: 100,
      license_plate: "ABC-123",
      brand: "brand",
      category_id: "category",
      fine_amount: 60,
    });

    const specification = await specificationRepository.create({
      description: "teste",
      name: "test",
    });

    const specificationsCars = await createCarSpecificationUseCase.execute({
      car_id: car.id,
      specifications_id: [specification.id],
    });

    expect(specificationsCars).toHaveProperty("specifications");
    expect(specificationsCars.specifications.length).toBe(1);
  });
});
