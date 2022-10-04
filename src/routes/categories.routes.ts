import { Request, Response, Router } from "express";
const categoriesRouter = Router();
import multer from 'multer';
var upload = multer({
  dest: "./tmp",
})

// repositories
import { listCategoriesController } from '../modules/cars/useCases/listCategories'
// services
import { createCategoryController }  from '../modules/cars/useCases/createCategory'
import { importCategoryController } from '../modules/cars/useCases/importCategory'



categoriesRouter.post("/", createCategoryController.handle);

categoriesRouter.get("/", listCategoriesController.handle); 

categoriesRouter.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRouter };
