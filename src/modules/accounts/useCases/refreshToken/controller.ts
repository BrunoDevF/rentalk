import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUseCase } from "./useCase";

export class RefreshTokenController {
  // constructor(private refreshTokenUseCase: RefreshTokenUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

      const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

      const refresh_token = refreshTokenUseCase.execute(token);

      return response.json(refresh_token)
      
  }
}
