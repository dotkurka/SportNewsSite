import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';

import { errorMessages } from 'src/constants';
import { AuthService } from 'src/features/auth/auth.service';
import { User } from 'src/features/users';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string): Promise<User> {
    const user = await this.authService.validateUser(email.toLowerCase(), password);

    if (!user) {
      throw new UnauthorizedException(errorMessages.invalidCredentials);
    }

    return user;
  }
}
