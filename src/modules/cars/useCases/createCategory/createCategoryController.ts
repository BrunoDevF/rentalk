import { CreateCategoryUseCase } from "./CreateCategoryUseCase";
import { Request, Response } from "express";


class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

    handle(request: Request, response: Response): Response {
        const { name, description } = request.body;
        console.log('essa porra', this.createCategoryUseCase);
        console.log(request.body);
        const result = this.createCategoryUseCase.execute(request.body);
        
        return response.status(201).json(result);
    }
}

export { CreateCategoryController }