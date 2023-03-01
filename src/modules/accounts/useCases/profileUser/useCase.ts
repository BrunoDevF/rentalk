import { inject, injectable } from "tsyringe";
import { User } from "../../infra/typeorm/entities/User";
import { IUserRepository } from 'src/modules/accounts/repositories/interfaces/IUserRepository';

@injectable()
export class ProfileUserUseCase {
    constructor(
        @inject("UsersRepository")
        private userRepository: IUserRepository
    ) {}
    async execute(id: string) : Promise<User>{
        const user = await this.userRepository.findById(id)
        return user
    }
}