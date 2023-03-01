import '../typeorm'
import "reflect-metadata"

import '../../container'

import express, { NextFunction, Request, response, Response } from 'express';

import "express-async-errors"
import swaggerUi from 'swagger-ui-express';
import swaggerFile from '../../../swagger.json'
import { AppError } from '../../errors/AppError';
import { router } from './routes';
import auth from 'src/config/auth';
import upload from 'src/config/upload';

class Server {
    public app: express.Application;

    constructor() {
        this.express();
        this.json();
        this.routes();
        // this.resolveErrors();
        this.swagger();
        this.static()
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
    static() {
        this.app.use("/avatar", express.static(`${upload.tmpFolder}/avatar`))
        this.app.use("/cars", express.static(`${upload.tmpFolder}/cars`))
    }

    resolveErrors() {
        this.app.use(function (err: Error, req: Request, res: Response, next: NextFunction) {
            next();
            if(err instanceof AppError){
                return res.status(err.statusCode).json({ message: err.message });
            }

            // return response.status(500).json({ 
            //     status: 'error',
            //     message: `Internal Server Error - ${err}` 
            // })
            next();
        })
    }
}

export default new Server().app;
