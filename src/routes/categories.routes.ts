import { Request, Response, Router } from "express";
const categoriesRouter = Router();

// repositories
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
// services
import { createCategoryController } from '../modules/cars/useCases/createCategory'

categoriesRouter.post("/", (request: Request, response: Response) => {
  createCategoryController.handle(request, response);
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

export { categoriesRouter };
