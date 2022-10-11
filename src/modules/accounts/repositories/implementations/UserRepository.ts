import { IUserRepository } from "../interfaces/IUserRepository";
import { ICreateUserDTO } from "../interfaces/IUserRepository";
import { Repository } from "typeorm";
import { User } from "./../../entities/User";
import { getRepository } from "typeorm";

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    username,
    password,
    name,
    driver_license,
    email,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      username,
      password,
      name,
      driver_license,
      email,
    });
    await this.repository.save(user)
  }
}
