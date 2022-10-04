import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { Request, Response } from "express";
import { container } from 'tsyringe';
export class CreateSpecificationController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { description, name } = request.body;
        
        const createSpecificationUseCase = container.resolve(
            CreateSpecificationUseCase
        );

        await createSpecificationUseCase.execute({ description, name });

        return response.status(201).send();
    }
}
