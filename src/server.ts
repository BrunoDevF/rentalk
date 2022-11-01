import './database'
import "reflect-metadata"
import './shared/container'
import express, { NextFunction, Request, response, Response } from 'express';
import "express-async-errors"
import { router } from './routes'
import swaggerUi from 'swagger-ui-express';
import swaggerFile from './swagger.json'
import { AppError } from './errors/AppError';

class Server {
    public app: express.Application;

    constructor() {
        this.express();
        this.json();
        this.routes();
        this.resolveErrors();
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

    resolveErrors() {
        this.app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
            if(err instanceof AppError){
                return res.status(err.statusCode).json({ message: err.message });
            }

            return response.status(500).json({ 
                status: 'error',
                message: `Internal Server Error - ${err.message}` 
            })
        })
    }
}

export default new Server().app;
