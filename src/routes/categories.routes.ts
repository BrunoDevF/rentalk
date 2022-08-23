import { Request, Response, Router } from "express";
const categoriesRouter = Router();
// repositories
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
// services
import { createCategoryController } from '../modules/cars/useCases/createCategory'
// instancia
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request: Request, response: Response) => {
  createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const result = categoriesRepository.list();
  return response.status(200).json(result);
});

export { categoriesRouter };
