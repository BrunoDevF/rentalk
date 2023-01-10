import { Request, Response, Router } from "express";
const categoriesRouter = Router();
import multer from 'multer';

var upload = multer({
  dest: "./tmp",
})

import { createCategoryController } from "../../../../modules/cars/useCases/createCategory";
import { importCategoryController } from "../../../../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../../../../modules/cars/useCases/listCategories";


categoriesRouter.post("/", (req: Request, res: Response) => createCategoryController.handle(req, res));

categoriesRouter.get("/", listCategoriesController.handle); 

categoriesRouter.post("/import", upload.single("file"), importCategoryController.handle);

export { categoriesRouter };
