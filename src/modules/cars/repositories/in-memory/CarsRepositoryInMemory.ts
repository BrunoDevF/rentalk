
import { ICreateCarDTO } from '../../dtos/ICreateCarDTO';

import { ICarsRepository } from '../interfaces/ICarsRepository';
import { Car } from '../../infra/typeorm/entities/Car';
export class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];

    async create({
        brand,
        category_id,
        description,
        fine_amount,
        license_plate,
        daily_rate,
        name
    }: ICreateCarDTO): Promise<void> {
        const category = new Car({
            brand,
            category_id,
            description,
            fine_amount,
            license_plate,
            daily_rate,
            name
        });

        this.cars.push(category)
    }

}