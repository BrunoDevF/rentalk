import { Request, Response, Router } from "express";
const categoriesRouter = Router();
// repositories
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoriesRepository } from "../repositories/PostgresCategoriesRepository";
// services
import { CreateCategoryService } from "../services/CreateCategoryService";

// instancia
const categoriesRepository = new PostgresCategoriesRepository();

categoriesRouter.post("/", (request: Request, response: Response) => {
  try {
    const createCategoryService = new CreateCategoryService(categoriesRepository);
    
    createCategoryService.execute(request.body);
    return response.status(201).send();
  } catch (error) {
    console.log(error);
    return response.status(400).json(error.response);
  }

});

categoriesRouter.get("/", (request: Request, response: Response) => {
  const result = categoriesRepository.list();
  return response.status(200).json(result);
});

export { categoriesRouter };
