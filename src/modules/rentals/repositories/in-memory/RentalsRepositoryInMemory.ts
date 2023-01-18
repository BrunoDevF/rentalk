import { Rental } from "../../infra/typeorm/entities/Rental";
import { IRentalsRepository } from "../../infra/typeorm/interfaces/IRentalsRepository";
import { ICreateRentalDTO } from "../../useCases/createRental/DTO";

export class RentalsRepositoryInMemory implements IRentalsRepository {
  rentals: Rental[] = [];

  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = new Rental({
      car_id,
      expected_return_date,
      user_id,
      start_date: new Date(),
    });

    this.rentals.push(rental);
    return rental;
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.car_id == car_id && !rental.end_date
    );
  }
  async findIOpenRentalByUser(user_id: string): Promise<Rental> {
    return this.rentals.find(
      (rental) => rental.user_id == user_id && !rental.end_date
    );
  }
}
