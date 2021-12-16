import 'express-async-errors'
import express from 'express';
import { globalErrors } from './middlewares/globalErrors';
import {createConnection} from 'typeorm'
import routes from './routes';
import cors from 'cors'


createConnection().then(connection => {

    const app = express();
    const PORT = 3333;
    // HABILITANDO REQ.BODY
    app.use(express.urlencoded({extended: true}));
    app.use(express.json())


    app.use(cors())


    // CONFIGURANDO PASTA PUBLIC
    // app.use(express.static('public'));

    // INSERINDO ROTAS
    app.use(routes);
    
    //Pegando erros lançados durante uso da aplicação
    app.use(globalErrors)
    
    //PORTA PARA O SERVIDOR
    app.listen(PORT, () => console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`))

})