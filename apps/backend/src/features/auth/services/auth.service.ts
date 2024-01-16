import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { SignUpDto } from 'src/features/auth/dto';
import { UserRole } from 'src/features/auth/enums';
import { JwtPayload } from 'src/features/auth/interfaces';
import { JwtService } from 'src/features/auth/services/jwt.service';
import { User, UsersService } from 'src/features/users';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signUp({ firstName, lastName, email, password }: SignUpDto) {
    const user = await this.usersService.create({
      firstName,
      lastName,
      email,
      password,
      role: UserRole.User,
    });

    const token = await this.generateToken(user);

    return token;
  }

  async logIn(user: User) {
    const token = await this.generateToken(user);

    return token;
  }

  async generateToken(user: User) {
    const payload: JwtPayload = { email: user.email, sub: user.id, role: user.role };
    const token = await this.jwtService.signAsync(payload);

    return { token };
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    try {
      const user = await this.usersService.findOneByEmail(email);

      if (!user.password) {
        throw new ForbiddenException();
      }

      const doPasswordsMatch = await bcrypt.compare(password, user.password);

      if (doPasswordsMatch) {
        return user;
      }
      return null;
    } catch (error) {
      if (error instanceof NotFoundException) {
        return null;
      }
      throw error;
    }
  }

  async validateUserPayload(payload: JwtPayload): Promise<User | null> {
    try {
      const user = await this.usersService.findOneById(payload.sub);

      return user;
    } catch (erorr) {
      return null;
    }
  }
}
