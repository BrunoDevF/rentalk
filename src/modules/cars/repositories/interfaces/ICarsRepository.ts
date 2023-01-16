import { ICreateCarDTO } from '../../../cars/dtos/ICreateCarDTO'
import { Car } from '../../infra/typeorm/entities/Car';
import { IRequest } from '../../useCases/listAvailableCars/useCase'

export interface ICarsRepository {
  findByLicensePlate(license_plate: string): Promise<Car> 
  create(data: ICreateCarDTO): Promise<Car>;
  findAvailable({ brand, category_id, name }: IRequest): Promise<Car[]>
}
