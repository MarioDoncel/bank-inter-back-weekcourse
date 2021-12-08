import express from 'express'
import userRouter from './user.routes'

const routes = express.Router();

routes.get('/', (req, res) => res.send('Express + Typescript Server'));

routes.use('/user', userRouter);
routes.use('/pix', userRouter);

export default routes;
