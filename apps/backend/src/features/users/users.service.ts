import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

import errorMessages from 'src/constants/error-messages';
import { UserRole } from 'src/features/auth/enums';
import { CreateUserDto, UpdateUserDto } from 'src/features/users/dto';
import { User } from 'src/features/users/entities';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  private hashPass = async (password: string) => bcrypt.hash(password, await bcrypt.genSalt());

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: string) {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }

  async create({ role = UserRole.User, ...createUserDto }: CreateUserDto) {
    const userExists = await this.usersRepository.exists({ where: { email: createUserDto.email } });

    if (userExists) {
      throw new BadRequestException(errorMessages.userAlreadyExists);
    }

    const password = await this.hashPass(createUserDto.password);
    const user = this.usersRepository.create({ ...createUserDto, password, role });

    const newUser = await this.usersRepository.save(user);

    return newUser;
  }

  async update(id: string, createUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException();
    }

    await this.usersRepository.update(user.id, { ...createUserDto });

    return this.findOne(id);
  }

  async updatePassword(id: string, password: string) {
    const entity = await this.findOne(id);

    const hashedPasswordUpdate = await this.hashPass(password);

    await this.usersRepository.update(entity.id, {
      password: hashedPasswordUpdate,
    });

    return this.findOne(id);
  }
}
