import { CarsRepositoryInMemory } from "../../repositories/in-memory/CarsRepositoryInMemory";
import { ListCarsUseCase } from "./useCase"

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;


describe("List Cars", () => {

    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    });

    it("should be able to list all available cars", async () => {
        const insertCar = await carsRepositoryInMemory.create({
            brand: "BMW",
            daily_rate: 1,
            category_id: "7e7ab8b8-bff5-414f-9c6b-3f3ca4394df9",
            description: "asd",
            fine_amount: 1,
            license_plate: "",
            name: "BMW",
        })
        const cars = await listCarsUseCase.execute({});

        expect(cars).toEqual([insertCar])
    })

    it("should be able to list all available cars by brand", async () => {
        const insertCar = await carsRepositoryInMemory.create({
            brand: "BMW2",
            daily_rate: 1,
            category_id: "7e7ab8b8-bff5-414f-9c6b-3f3ca4394df9",
            description: "asd",
            fine_amount: 1,
            license_plate: "",
            name: "BMWteste",
        })
        const cars = await listCarsUseCase.execute({
            brand: "BMW2",
        });
        expect(cars).toEqual([insertCar])
    })

    it("should be able to list all available cars by name", async () => {
        const insertCar = await carsRepositoryInMemory.create({
            brand: "BMW2",
            daily_rate: 1,
            category_id: "7e7ab8b8-bff5-414f-9c6b-3f3ca4394df9",
            description: "asd",
            fine_amount: 1,
            license_plate: "23111",
            name: "BMW-teste-3",
        })
        const cars = await listCarsUseCase.execute({
            name: "BMW-teste-3",
        });
        expect(cars).toEqual([insertCar])
    })

    it("should be able to list all available cars by category id", async () => {
        const insertCar = await carsRepositoryInMemory.create({
            brand: "BMW2",
            daily_rate: 1,
            category_id: "7e7ab8b8-bff5-414f-9c6b-3f3ca4394df9",
            description: "asd",
            fine_amount: 1,
            license_plate: "23111",
            name: "BMW-teste-3",
        })
        const cars = await listCarsUseCase.execute({
            category_id: "7e7ab8b8-bff5-414f-9c6b-3f3ca4394df9"
        });
        expect(cars).toEqual([insertCar])
    })
})