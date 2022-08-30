import express from 'express';
import { router } from './routes'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json'
class Server {
    public app: express.Application;

    constructor() {
        this.express();
        this.json();
        this.routes();
        this.swagger();
    }

    express() {
        this.app = express();
    }

    swagger() {
        this.app.use('/api-docs/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));
        
    }
    
    json() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(router)
    }
}

export default new Server().app;
