import { Repository } from 'typeorm';
import { IUsersTokensRepository } from '../../../repositories/interfaces/IUsersTokensRepository';
import { UserTokens } from '../entities/UserToken';
import { getRepository } from 'typeorm';

export class UsersTokensRepository implements IUsersTokensRepository {
    private repository: Repository<UserTokens>

    constructor() {
        this.repository = getRepository(UserTokens)
    }
    async delete(id: string) {
        await this.repository.delete({id})
    }
    async findByUserIdAndRefreshToken(user_id: string, token: string): Promise<UserTokens> {
        const usersTokens = await this.repository.findOne({
            user_id: user_id,
            refresh_token: token
        })
        return usersTokens
    }
    
    async create(data: any) {
        const userToken = this.repository.create(data)
        await this.repository.save(userToken)
        return userToken
    }

}
