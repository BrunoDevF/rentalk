import { AppError } from "src/errors/AppError";
import { inject, injectable } from "tsyringe";
import {
  ISpecificationRepository,
  ICreateSpecificationDTO,
} from "../../repositories/interfaces/ISpecificationRepository";

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject("SpecificationRepository")
    private specificationRepository: ISpecificationRepository
  ) {}

  async execute({ description, name }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists = await this.specificationRepository.findByName(name);

    if(specificationAlreadyExists) {
        throw new AppError(`Specification with name ${name} already exists`);
    }

    const specification = await this.specificationRepository.create({
      description,
      name,
    });
    return specification;
  }
}
