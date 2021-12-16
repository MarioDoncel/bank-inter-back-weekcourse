import express from 'express'
import userRouter from './user.routes'
import pixRouter from './pix.routes'

const routes = express.Router();

routes.get('/', (req, res) => res.send('Express + Typescript Server'));

routes.use('/user', userRouter);
routes.use('/pix', pixRouter);

export default routes;
