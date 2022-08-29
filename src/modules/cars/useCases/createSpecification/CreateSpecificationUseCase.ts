import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../../repositories/interfaces/ISpecificationRepository";

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationRepository) {}

  execute({ description, name }: ICreateSpecificationDTO) {
    const specificationAlreadyExists = this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
        throw new Error(`Specification with name ${name} already exists`);
    }

    const specification = this.specificationRepository.create({
      description,
      name,
    });
    return specification;
  }
}
