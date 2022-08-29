import { Specification } from "../../model/Specification";
import {
  ICreateSpecificationDTO,
  ISpecificationRepository,
} from "../interfaces/ISpecificationRepository";

export class SpecificationRepositories implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }
    findByName(name: string): Specification {
        const specification = this.specifications.find(spec => spec.name === name);
        return specification
    }

  create({ description, name }: ICreateSpecificationDTO): void {
    const specification = new Specification({ description, name });

    this.specifications.push(specification);
  }
}
