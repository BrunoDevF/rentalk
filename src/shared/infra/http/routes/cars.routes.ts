import { Router } from 'express';
import { Request, Response } from 'express';
import { createCarController } from '../../../../modules/cars/useCases/createCar'

const carsRouter = Router();

carsRouter.post('/', (request: Request, response: Response) => 
createCarController.handle(request, response));

export { carsRouter }