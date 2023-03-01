import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { AppError } from "../../../../shared/errors/AppError";
import auth from "src/config/auth";
import { IUsersTokensRepository } from "../../repositories/interfaces/IUsersTokensRepository";
import { IDateProvider } from "src/shared/container/providers/dateProvider/IDateProvider";
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}

@injectable()
class AuthenticateUserCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayJsDateProvider")
    private dayJsDateProvider: IDateProvider
  ) {}
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Email or password incorrect");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect");
    }
    const token = sign({}, auth.secret_token, {
      subject: user.id,
      expiresIn: auth.expires_in_token,
    });

    // Refresh token
    // - recarregar token quando expirado
    // - salvar token no banco
    // - usuario pode ter mais de um token. ex.: token para celular, pc e entre outros dispositivos

    const expires_token_expires_date = this.dayJsDateProvider.addDays(
      Number(auth.expire_in_refresh_token.split("d")[0])
    );

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: user.id,
      expiresIn: auth.expire_in_refresh_token,

    });

    await this.usersTokensRepository.create({
      user_id: user.id,
      refresh_token: refresh_token,
      expires_date: expires_token_expires_date,
    });

    return {
      user: {
        email: user.email,
        name: user.name,
      },
      token,
      refresh_token
    };
  }
}

export { AuthenticateUserCase };
