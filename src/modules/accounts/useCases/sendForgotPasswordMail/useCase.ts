import { inject, injectable } from "tsyringe";
import { IUserRepository } from "src/modules/accounts/repositories/interfaces/IUserRepository";
import { IUsersTokensRepository } from "../../repositories/interfaces/IUsersTokensRepository";
import { v4 as uuidv4 } from "uuid";
import { IDateProvider } from "src/shared/container/providers/dateProvider/IDateProvider";
import { IMailProvider } from '../../../../shared/container/providers/MailProvider/interface/MailProvider';

@injectable()
export class SendForgotPasswordMail {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUserRepository,
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUsersTokensRepository,
    @inject("DayjsProvider")
    private dayJsProvider: IDateProvider,
    @inject("EtherealMailProvider")
    private mailProvider: IMailProvider
  ) {}
  async execute(email: string): Promise<void> {
    const user = this.usersTokensRepository.findByEmail(email);
    if (!user) throw new Error("User does not exists!");

    const token = uuidv4();

    const expires_date = await this.dayJsProvider.addHours(3);

    await this.usersTokensRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date: expires_date,
    });

    await this.mailProvider.sendMail(email, "Recuperacao de senha", `O link para o reset é ${token}`)
  }
}
