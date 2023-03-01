import { UserTokens } from '../../infra/typeorm/entities/UserToken';
export interface IUsersTokensRepository {
    create(data: any);
    delete(id: string);
    findByUserIdAndRefreshToken(user_id: string, token: string): Promise<UserTokens>
}