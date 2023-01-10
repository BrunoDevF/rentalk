import { inject, injectable } from "tsyringe";
import "reflect-metadata";
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository";
import { AppError } from "../../../../shared/errors/AppError";
import { Car } from "../../infra/typeorm/entities/Car";

interface IRequest {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

@injectable()
class CreateCarUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    name,
    description,
    daily_rate,
    license_plate,
    brand,
    category_id,
    fine_amount,
  }: IRequest): Promise<Car> {

    // const carAlreadyExists = await this.carsRepository.findByLicensePlate(
    //   license_plate
    // );
    // console.log("bendito usecase", carAlreadyExists);

    // if (carAlreadyExists) throw new AppError("Car already exists.");

    console.log("usecase create car");
    const car = await this.carsRepository.create({
      name,
      description,
      daily_rate,
      license_plate,
      brand,
      category_id,
      fine_amount,
    });
    console.log("car =>", car);
    return car;
  }
}

export { CreateCarUseCase };
