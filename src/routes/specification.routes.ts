import { Request, Response, Router } from "express";
const specificationRouter = Router();

import { createSpecificationController } from '../modules/cars/useCases/createSpecification'

specificationRouter.post("/", (request: Request, response: Response) => {
  createSpecificationController.handle(request, response);
});

export { specificationRouter };
