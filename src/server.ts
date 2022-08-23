import express from 'express';

// routes
import { categoriesRouter } from './routes/categories.routes'
import { specificationRouter } from './routes/specification.routes'
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
        this.app.use("/specification",specificationRouter);
    }
}

export default new Server().app;
