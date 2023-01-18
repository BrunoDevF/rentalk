import { Response, Request } from "express";
import { container } from 'tsyringe';
import { CreateRentalUseCase } from "./useCase";


export class CreateRentalController {

    async handle(request: Request, response: Response): Promise<Response> {
        const createRentalUseCase = container.resolve(CreateRentalUseCase);
        const { car_id, expected_return_date, user_id } = request.body
        const { id } = request.user
        const rental = await createRentalUseCase.execute({ car_id, expected_return_date, user_id: id })
        return response.status(201).json(rental)
    }
}