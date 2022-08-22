import { Request, Response, Router } from "express";
const categoriesRouter = Router();
// repositories
import { CategoriesRepository } from "../repositories/CategoriesRepository";
// services
import { CreateCategoryService } from "../services/CreateCategoryService";

// instancia
const categoriesRepository = new CategoriesRepository();

categoriesRouter.post("/", (request: Request, response: Response) => {
  const createCategoryService = new CreateCategoryService(categoriesRepository);
  createCategoryService.execute(request.body);

  return response.status(201).send();
});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const result = categoriesRepository.list();
  return response.status(200).json(result);
});

export { categoriesRouter };
