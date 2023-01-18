import { ICreateRentalDTO } from "src/modules/rentals/useCases/createRental/DTO";
import { Rental } from "../entities/Rental";
import { IRentalsRepository } from "../interfaces/IRentalsRepository";
import { Repository } from "typeorm";
import { getRepository } from "typeorm";

export class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = getRepository(Rental);
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
  }: ICreateRentalDTO): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
    });

    await this.repository.save(rental);
    return rental
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({ car_id });
    return openByCar;
  }
  async findIOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({ user_id });
    return openByUser;
  }
}
