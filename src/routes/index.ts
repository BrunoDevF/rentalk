import { Router } from "express";
import { categoriesRouter } from "./categories.routes";
import { specificationRouter } from "./specification.routes";
import { UserRouter } from './user.routes'
import { authenticateRoutes } from './authenticate.routes'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'
const router = Router();

router.use("/categories", categoriesRouter);
router.use("/specification", specificationRouter);
router.use("/user", UserRouter);
router.use(authenticateRoutes);

export { router };
