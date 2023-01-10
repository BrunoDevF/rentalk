import { CreateCarUseCase } from "./useCase";
import { container } from "tsyringe";
import { Request, Response } from "express";

interface IReq extends Request {
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  fine_amount: number;
  brand: string;
  category_id: string;
}

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: any = request.body;
    const {
        name,
        description,
        daily_rate,
        license_plate,
        brand,
        category_id,
        fine_amount,
    } = data;
    console.log('data', data);

    const createCarUseCase = container.resolve(CreateCarUseCase);
    console.log('final', createCarUseCase)
    const result = await createCarUseCase.execute({
      name,
      description,
      daily_rate,
      license_plate,
      brand,
      category_id,
      fine_amount,
    });
    return response.status(201).json(result);
  }
}

export { CreateCarController };
