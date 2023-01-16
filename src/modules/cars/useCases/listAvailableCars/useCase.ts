import { Car } from "../../infra/typeorm/entities/Car";
import { ICarsRepository } from "../../repositories/interfaces/ICarsRepository";
import { inject, injectable } from 'tsyringe';

export interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}
@injectable()
export class ListCarsUseCase {
  constructor(
    @inject("CarsRepository")
    private carsRepository: ICarsRepository) {}
  
  async execute({ brand, category_id, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable({
      brand,
      category_id,
      name,
    });
    return cars;
  }
}
