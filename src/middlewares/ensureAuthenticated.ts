import { Request, Response, NextFunction } from "express";
import { verify } from 'jsonwebtoken'
import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
    sub: string,

}
export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        throw new AppError("Token not provided", 401);
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub: user_id } = verify(token, "a2e63ee01401aaeca78be023dfbb8c59") as IPayload;
        const usersRepository = new UserRepository();
        const user = await usersRepository.findById(user_id);
        if(!user) {
            throw new AppError("User doesn't exist", 401);
        }

        req.user = {
            id: user_id,
        }
        next();
    } catch (error) {
        throw new AppError("Invalid Token", 401);
    }
}