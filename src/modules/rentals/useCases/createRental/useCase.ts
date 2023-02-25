import { AppError } from "../../../../shared/errors/AppError";
import { IRentalsRepository } from "../../infra/typeorm/interfaces/IRentalsRepository";
import dayjs from "dayjs";
import { Rental } from "../../infra/typeorm/entities/Rental";
import { IDateProvider } from "../../../../shared/container/providers/dateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "src/modules/cars/repositories/interfaces/ICarsRepository";

interface IRequest {
  user_id: string;
  car_id: string;
  expected_return_date: Date;
}
@injectable()
export class CreateRentalUseCase {
  constructor(
    @inject("RentalsRepository")
    private rentalsRepository: IRentalsRepository,
    @inject("DayJsDateProvider")
    private dateProvider: IDateProvider,
    @inject("CarsRepository")
    private carsRepository: ICarsRepository
  ) {}

  async execute({
    car_id,
    expected_return_date,
    user_id,
  }: IRequest): Promise<Rental> {
    const min = 24;
    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError("Car is unavailable!");
    }

    const rentalOpenTouser = await this.rentalsRepository.findIOpenRentalByUser(
      user_id
    );
    if (rentalOpenTouser) {
      throw new AppError("There's a rentasl in progress for user!");
    }

    const dateNow = this.dateProvider.dateNow();
    const compare = this.dateProvider.compareInHours(
      dateNow,
      expected_return_date
    );

    if (compare < min) {
      throw new AppError("Invalid return time!");
    }

    const rental = await this.rentalsRepository.create({
      car_id,
      expected_return_date,
      user_id,
    });

    // await this.carsRepository.

    return rental;
  }
}
