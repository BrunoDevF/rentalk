import { Request, Response, Router } from "express";
const specificationRouter = Router();

import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

specificationRouter.post("/", createSpecificationController.handle);

export { specificationRouter };
