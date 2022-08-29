import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'
import { CreateSpecificationController } from './createSpecificationController'
import { SpecificationRepositories } from '../../repositories/implementations/SpecificationRepository'

const specificationRepositories = new SpecificationRepositories();

const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepositories);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController }