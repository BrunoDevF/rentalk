import express from 'express';
import { router } from './routes'

class Server {
    public app: express.Application;

    constructor() {
        this.express();
        this.json();
        this.routes();
    }

    express() {
        this.app = express();
    }
    
    json() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(router);
    }
}

export default new Server().app;
