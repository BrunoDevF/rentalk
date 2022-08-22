import express from 'express';
import { categoriesRouter } from './routes/categories.routes'

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
        this.app.use("/categories",categoriesRouter);
    }
}

export default new Server().app;
