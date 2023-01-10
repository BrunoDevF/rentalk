import { inject, injectable } from "tsyringe";
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository";

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
  }: IRequest): Promise<void> {
    this.carsRepository.create({
        name,
        description,
        daily_rate,
        license_plate,
        brand,
        category_id,
        fine_amount,
      })
  }
}

export { CreateCarUseCase };