import { Router } from 'express';
import multer from 'multer';
import { createUserController } from '../modules/accounts/useCases/createUser'
import { createUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar'

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated'

import uploadConfig from '../config/upload'

const UserRouter = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));


UserRouter.post('/', createUserController.handle);

UserRouter.patch('/avatar', 
ensureAuthenticated, 
uploadAvatar.single('avatar'), 
createUserAvatarController.handle);

export { UserRouter }