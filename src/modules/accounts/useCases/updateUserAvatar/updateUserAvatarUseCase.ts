import { IUserRepository } from "../../repositories/interfaces/IUserRepository";

import {  deleteFile } from '../../../../utils/file'

import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  avatar_file: string;

}

@injectable()
class CreateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ avatar_file, user_id }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);
    if(user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatar_file;
    await this.userRepository.create(user);
  }
}

export { CreateUserAvatarUseCase };
