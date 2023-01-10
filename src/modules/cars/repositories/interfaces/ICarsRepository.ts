import { Category } from "../../infra/typeorm/entities/Category";
import { ICreateCarDTO } from '../../../cars/dtos/ICreateCarDTO'

export interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<void>;
}
