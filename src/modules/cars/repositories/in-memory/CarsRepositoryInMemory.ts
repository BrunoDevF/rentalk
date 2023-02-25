
import { ICreateCarDTO } from '../../dtos/ICreateCarDTO';

import { ICarsRepository } from '../interfaces/ICarsRepository';
import { Car } from '../../infra/typeorm/entities/Car';
import { getConnection, getConnectionOptions, Repository } from 'typeorm';
import { IRequest } from '../../useCases/listAvailableCars/useCase'
import { getRepository } from 'typeorm';
export class CarsRepositoryInMemory implements ICarsRepository {
    cars: Car[] = [];

    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car)
    }
    async updateAvailable(id: string, available: boolean): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update()
        .set({ available })
        .where("id = :id")
        .setParameters({id}).execute()
    }
    async findById(id: string): Promise<Car> {
        const car = await this.repository.findOne(id)
        return car
    }
    async findAvailable({ brand, category_id, name }: IRequest): Promise<Car[]> {
        // const all = this.cars
        // .filter(car => {
        //     if(
        //         car.available == true ||
        //         (brand && car.brand == brand) || 
        //         (category_id && car.category_id == category_id) || 
        //         (name && car.name == name)
        //     ) {
        //         return car
        //     }
        //     return null
        // })
        // return all;
        const carsQuery = await this.repository
        .createQueryBuilder("c")
        .where("available = :available", { available: true })

        if(brand) {
            carsQuery.andWhere("c.brand = :brand", { brand })
        }

        if(name) {
            carsQuery.andWhere("c.name = :name", { name })
        }

        if(category_id) {
            carsQuery.andWhere("c.category_id = :category_id", { category_id })
        }

        const cars = await carsQuery.getMany();
        return cars
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
        name,
        specifications,
        id
    }: ICreateCarDTO): Promise<any> {
        let car = new Car({
            brand,
            category_id,
            description,
            fine_amount,
            license_plate,
            daily_rate,
            name,

        });
        console.log('car repository => ', car);

        await this.repository.save(car)
        console.log('teste fianl reposi')
        // this.cars.push(car)
        return {has_error: false, data: car}
    }

}