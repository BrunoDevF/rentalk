import { IUserRepository } from "../../repositories/interfaces/IUserRepository";
import { ICreateUserDTO } from "../../repositories/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { hashSync } from 'bcrypt'

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    driver_license,
    email,
    name,
    password,
  }: ICreateUserDTO): Promise<any> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if(userAlreadyExists) {
      return {
        has_error: true,
        error: new Error("User already exists")
      }
    }
    const passwordHash = await hashSync(password, 8);
    await this.userRepository.create({
      driver_license,
      email,
      name,
      password: passwordHash,
    });
    return {
      has_error: false,
      error: new Error("User already exists")
    }
  }
}

export { CreateUserUseCase };
