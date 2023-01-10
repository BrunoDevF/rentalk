import { CreateCarUseCase } from "./useCase"
import { CarsRepositoryInMemory } from '../../repositories/in-memory/CarsRepositoryInMemory';
import { AppError } from '../../../../shared/errors/AppError';

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
         const car = await createCarUseCase.execute({
            name: "Name Car",
            description: "description car",
            daily_rate: 100,
            license_plate: "ABC-123",
            brand: 'brand',
            category_id: 'category',
            fine_amount: 60
        });

        expect(car).toHaveProperty("id")
    });

    it("should not be able to create a car with exists license plate", () => {
        expect(async () => {
            await createCarUseCase.execute({
                name: "Car1",
                description: "description car",
                daily_rate: 100,
                license_plate: "ABC-123",
                brand: 'brand',
                category_id: 'category',
                fine_amount: 60
            });

            await createCarUseCase.execute({
                name: "Car2",
                description: "description car",
                daily_rate: 100,
                license_plate: "ABC-123",
                brand: 'brand',
                category_id: 'category',
                fine_amount: 60
            });
        }).rejects.toBeInstanceOf(AppError)
    })

    it("should not be able to create a car with available true by default", async () => {
        const car = await createCarUseCase.execute({
            name: "Car available",
            description: "description car",
            daily_rate: 100,
            license_plate: "ABCDE-123",
            brand: 'brand',
            category_id: 'category',
            fine_amount: 60
        });

        expect(car.available).toBe(true)
    })
})