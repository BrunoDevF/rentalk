import { Request, Response, Router } from "express";
const specificationRouter = Router();

// repository
import { SpecificationRepositories } from "../modules/cars/repositories/SpecificationRepository";
// services
import { CreateSpecificationService } from "../modules/cars/services/CreateSpecificationService";
// instancia
const specificationRepositories = new SpecificationRepositories();

specificationRouter.post("/", (request: Request, response: Response) => {
  try {
    const createSpecificationService = new CreateSpecificationService(specificationRepositories);

    createSpecificationService.execute(request.body);
    return response.status(201).send();
  } catch (error) {
    return response.status(400).json(error);
  }
});

export { specificationRouter };
