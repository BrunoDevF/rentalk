import { Repository } from 'typeorm';
import { IUsersTokensRepository } from '../../../repositories/interfaces/IUsersTokensRepository';
import { UserTokens } from '../entities/UserToken';
import { getRepository } from 'typeorm';

export class UsersTokensRepository implements IUsersTokensRepository {
    private repository: Repository<UserTokens>

    constructor() {
        this.repository = getRepository(UserTokens)
    }
    
    async create(data: any) {
        const userToken = this.repository.create(data)
        await this.repository.save(userToken)
        return userToken
    }

}
