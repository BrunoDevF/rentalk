import { Router } from "express";
import { Request, Response } from "express";
import { createCarController } from "../../../../modules/cars/useCases/createCar";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const carsRouter = Router();

carsRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  (request: Request, response: Response) =>
    createCarController.handle(request, response)
);

export { carsRouter };
