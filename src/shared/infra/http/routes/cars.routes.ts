import { Router } from "express";
import { Request, Response } from "express";
import { createCarController } from "../../../../modules/cars/useCases/createCar";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { listAvailableCarsController } from "../../../../modules/cars/useCases/listAvailableCars";
import { createCarSpecificationController } from "../../../../modules/cars/useCases/createCarSpecification";
import { uploadCarImagesController } from "../../../../modules/cars/useCases/uploadCarImage";
import uploadConfig from '../../../../config/upload'
import multer from "multer";

const carsRouter = Router();

const upload = multer(uploadConfig.upload("./tmp/cars"));


carsRouter.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  (request: Request, response: Response) =>
    createCarController.handle(request, response)
);
carsRouter.post(
  "/specifications/:id",
  ensureAuthenticated,
  ensureAdmin,
  (request: Request, response: Response) =>
    createCarSpecificationController.handle(request, response)
);
carsRouter.get("/available", (request: Request, response: Response) =>
  listAvailableCarsController.handle(request, response)
);

carsRouter.post(
  "/images/:id",
  ensureAuthenticated,
  ensureAdmin,
  upload.array("images"),
  (request: Request, response: Response) =>
    uploadCarImagesController.handle(request, response)
);

export { carsRouter };
