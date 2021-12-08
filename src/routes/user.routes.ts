import express from 'express'
import userAuthenticated from '../middlewares/userAuthenticaded';
import { UserController } from '../resources/user/user.controllers';

const userRouter = express.Router();
const userController = new UserController

userRouter.post('/signin', userController.signin);
userRouter.post('/signup', userController.signup);
userRouter.get('/me', userAuthenticated, userController.me);
 
export default userRouter;