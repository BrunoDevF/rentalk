import { Request, Response, Router } from "express";
import { createSpecificationController } from "src/modules/cars/useCases/createSpecification";
const specificationRouter = Router();

specificationRouter.post("/", createSpecificationController.handle);

export { specificationRouter };
