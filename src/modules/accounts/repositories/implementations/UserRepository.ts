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
  findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ email });
    return user;
  }

  findById(id: string): Promise<User> {
    const user = this.repository.findOne(id);
    return user;
  }

  async create({
    password,
    name,
    driver_license,
    email,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      password,
      name,
      driver_license,
      email,
    });
    return await this.repository.save(user)
  }
}
