import express from 'express'
import userAuthenticated from '../middlewares/userAuthenticaded';
import  PixController  from '../resources/pix/pix.controllers';


const pixRouter = express.Router();
const pixController = new PixController

pixRouter.use(userAuthenticated)

pixRouter.post('/request', pixController.request);
pixRouter.post('/pay/:key', pixController.pay);
pixRouter.get('/transactions', pixController.transactions);

export default pixRouter;