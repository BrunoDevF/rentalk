import { Response,Request, Router } from 'express';
import multer from 'multer';
import { createUserController } from '../../../../modules/accounts/useCases/createUser';
import { createUserAvatarController } from '../../../../modules/accounts/useCases/updateUserAvatar';


import uploadConfig from '../../../../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const UserRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));


UserRouter.post('/', createUserController.handle);

UserRouter.patch('/avatar', 
ensureAuthenticated, 
uploadAvatar.single('avatar'), 
(request: any, response: Response) => createUserAvatarController.handle(request, response));

export { UserRouter }