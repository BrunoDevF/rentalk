
import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { inject, injectable } from 'tsyringe';
import { compare } from 'bcrypt';
import {
    sign
} from 'jsonwebtoken'
import { AppError } from "src/errors/AppError";
interface IRequest {
    email: string; 
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

@injectable()
class AuthenticateUserCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
      ) {}
    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);
        if(!user) {
            throw new AppError("Email or password incorrect");
        }
        
        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new AppError("Email or password incorrect");
        }
        const token = sign({}, "a2e63ee01401aaeca78be023dfbb8c59", {
            subject: user.id,
            expiresIn: "1d"
        });

        return {
            user: {
                email: user.email,
                name: user.name
            }, 
            token
        }
    }
}

export { AuthenticateUserCase }