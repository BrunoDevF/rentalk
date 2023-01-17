
import { inject, injectable } from 'tsyringe';
import { ICarsRepository } from '../../repositories/interfaces/ICarsRepository';
import { AppError } from '../../../../shared/errors/AppError';
import { ISpecificationRepository } from '../../repositories/interfaces/ISpecificationRepository';
import { Car } from '../../infra/typeorm/entities/Car';
interface IRequest {
    car_id: string
    specifications_id: string[];
}

@injectable()
export class CreateCarSpecificationUseCase {

    constructor(
        @inject("CarsRepository")        
        private carsRepository: ICarsRepository,
        @inject("SpecificationRepository")   
        private specificationsRepository: ISpecificationRepository
    ){}
    

    async execute({ car_id, specifications_id }: IRequest): Promise<Car> {
        const carsExist = await this.carsRepository.findById(car_id)

        if(!carsExist) {
            throw new AppError("Car does not exists!")
        }

        const specifications = await this.specificationsRepository.findByIds(
            specifications_id
        )

        carsExist.specifications = specifications;

        await this.carsRepository.create(carsExist)
        return carsExist
    }
}