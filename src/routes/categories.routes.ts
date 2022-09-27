import { Request, Response, Router } from "express";
const categoriesRouter = Router();
import multer from 'multer';
var upload = multer({
  dest: "./tmp",
})

// repositories
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
// services
import { CreateCategoryController }  from '../modules/cars/useCases/createCategory/createCategoryController'
import { importCategoryController } from '../modules/cars/useCases/importCategory'

const createCategoryController = new CreateCategoryController();

categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", (request: Request, response: Response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRouter.post("/import", upload.single("file"), (request: Request, response: Response) => {
  importCategoryController.handle(request, response);
});

export { categoriesRouter };
