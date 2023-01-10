import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationRouter } from "./specification.routes";
import { UserRouter } from './user.routes'
import { authenticateRoutes } from './authenticate.routes';
import { carsRouter } from '../routes/cars.routes';
const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specification", specificationRouter);
router.use("/user", UserRouter);
router.use("/cars", carsRouter);
router.use(authenticateRoutes);

export { router };
