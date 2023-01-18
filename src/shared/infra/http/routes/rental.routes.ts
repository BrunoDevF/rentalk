import { Request, Response, Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { createRentalController } from '../../../../modules/rentals/useCases/createRental'

const rentalRouter = Router();

rentalRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  (request: Request, response: Response) =>
  createRentalController.handle(request, response) 
);

export { rentalRouter };
