import { Rental } from "../entities/Rental"
import { ICreateRentalDTO } from '../../../useCases/createRental/DTO'

export interface IRentalsRepository {
    findOpenRentalByCar(car_id: string): Promise<Rental>
    findIOpenRentalByUser(user_id: string): Promise<Rental>
    create(data: ICreateRentalDTO): Promise<Rental>
}