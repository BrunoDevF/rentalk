import { Router } from "express";

const authenticateRoutes = Router();
// controllers
import { authenticateController } from '../modules/accounts/useCases/authenticateUser'

authenticateRoutes.post("/sessions", authenticateController.handle);

export { authenticateRoutes }