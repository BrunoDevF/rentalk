import { Request, Response, Router } from "express";
import { createSpecificationController } from "../../../../modules/cars/useCases/createSpecification";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
const specificationRouter = Router();

specificationRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createSpecificationController.handle
);

export { specificationRouter };
