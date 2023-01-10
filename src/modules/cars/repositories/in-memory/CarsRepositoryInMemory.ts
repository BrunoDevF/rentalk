
import { ICreateCarDTO } from '../../dtos/ICreateCarDTO';

import { ICarsRepository } from '../interfaces/ICarsRepository';
import { Car } from '../../infra/typeorm/entities/Car';
import { Repository } from 'typeorm';
import { getRepository } from 'typeorm';
export class CarsRepositoryInMemory implements ICarsRepository {
    // cars: Car[] = [];

    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car)
    }
    
    async findByLicensePlate(license_plate: string): Promise<Car> {
        const car = await this.repository.findOne({ license_plate })
        console.log('findByLicensePlate', car);
        return car
    }

    async create({
        brand,
        category_id,
        description,
        fine_amount,
        license_plate,
        daily_rate,
        name
    }: ICreateCarDTO): Promise<any> {
        let car = new Car({
            brand,
            category_id,
            description,
            fine_amount,
            license_plate,
            daily_rate,
            name
        });
        console.log('car repository => ', car);

        await this.repository.save(car)
        console.log('teste fianl reposi')
        // this.cars.push(car)
        return {has_error: false, data: car}
    }

}