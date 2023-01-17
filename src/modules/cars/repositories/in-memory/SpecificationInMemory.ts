import { getRepository, Repository } from "typeorm";
import { Specification } from "../../infra/typeorm/entities/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../interfaces/ISpecificationRepository";

export class SpecificationInMemory implements ISpecificationRepository {
  specifications: Specification[];
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification)
  }
  
  async create({ description, name }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = new Specification({ description, name })
    this.specifications.push(specification)
    return specification
  }
  async findByName(name: string): Promise<Specification> {
    return this.specifications.find(s => s.name == name)
  }
  async findByIds(ids: string[]): Promise<Specification[]> {
    const specifications = await this.repository.findByIds(ids);
    return specifications
  }
}
