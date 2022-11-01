import { Router } from 'express';
import { createUserController } from '../modules/accounts/useCases/createUser'

const UserRouter = Router();

UserRouter.post('/', createUserController.handle);

export { UserRouter }