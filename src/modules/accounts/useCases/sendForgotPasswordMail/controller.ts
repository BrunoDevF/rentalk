import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPasswordMail } from "./useCase";

export class SendForgotPasswordMailController {
  async handle(request: Request, response: Response): Promise<Response> {
    const useCase = container.resolve(SendForgotPasswordMail);

    await useCase.execute(request.body.email)

    return response
  }
}
