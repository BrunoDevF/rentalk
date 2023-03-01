import { sign, verify } from "jsonwebtoken";
import auth from "src/config/auth";
import { IDateProvider } from "src/shared/container/providers/dateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";
import { IUsersTokensRepository } from "../../repositories/interfaces/IUsersTokensRepository";

interface IPayload {
  sub: string;
  email: string;
}
@injectable()
export class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepositoery: IUsersTokensRepository,
    @inject("DayJsDateProvider")
    private dayJsDateProvider: IDateProvider
  ) {}

  async execute(token: string): Promise<string> {
    const decode = verify(token, auth.secret_refresh_token) as IPayload;
    const user_id = decode.sub;

    const userTokens =
      await this.usersTokensRepositoery.findByUserIdAndRefreshToken(
        user_id,
        token
      );
      
    if (!userTokens) throw new Error("Refresh token does not exists");

    await this.usersTokensRepositoery.delete(userTokens.id);

    const refresh_token = sign(
      { email: decode.email },
      auth.secret_refresh_token,
      {
        subject: user_id,
        expiresIn: auth.expire_in_refresh_token,
      }
    );

    const expires_token_expires_date = this.dayJsDateProvider.addDays(
      Number(auth.expire_in_refresh_token.split("d")[0])
    );

    await this.usersTokensRepositoery.create({
        refresh_token,
        user_id,
        expires_date: expires_token_expires_date
    })

    return refresh_token
  }
}
