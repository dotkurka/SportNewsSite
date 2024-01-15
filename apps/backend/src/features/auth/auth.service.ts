import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User, UsersService } from 'src/features/users';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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
}
