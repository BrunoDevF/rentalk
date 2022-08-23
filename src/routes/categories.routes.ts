import { Request, Response, Router } from "express";
const categoriesRouter = Router();
// repositories
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
// services
import { CreateCategoryService } from "../modules/cars/services/CreateCategoryService";

// instancia
const categoriesRepository = new CategoriesRepository();

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
