import { Request, Response, Router } from "express";
import { createSpecificationController } from "../../../../modules/cars/useCases/createSpecification";
const specificationRouter = Router();

specificationRouter.post("/", createSpecificationController.handle);

export { specificationRouter };
