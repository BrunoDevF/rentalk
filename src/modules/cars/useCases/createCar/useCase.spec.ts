import { CreateCarUseCase } from "./useCase"
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';

let createCarUseCase: CreateCarUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("Create Car", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        createCarUseCase = new CreateCarUseCase(
            carsRepositoryInMemory
        );
    });

    it("should create a new car", async () => {
        await createCarUseCase.execute({
            name: "Name Car",
            description: "description car",
            daily_rate: 100,
            license_plate: "ABC-123",
            brand: 'brand',
            category_id: 'category',
            fine_amount: 60
        });
    })
})