
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { CreateCarSpecificationUseCase } from './useCase';

export class CreateCarSpecificationController {

    async handle(request: Request, response: Response): Promise<Response>{
        const { id } = request.params;
        const { specifications_id  } = request.body

        const createCarSpecificationUseCase = container.resolve(
            CreateCarSpecificationUseCase
        )

        const car = await createCarSpecificationUseCase.execute({
            car_id: id,
            specifications_id: specifications_id
        })

        return response.status(201).json(car)
    }
}