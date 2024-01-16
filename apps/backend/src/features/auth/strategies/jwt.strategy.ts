import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import envConfig from 'src/config/env.config';
import { JwtPayload } from 'src/features/auth/interfaces';
import { AuthService } from 'src/features/auth/services';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(envConfig.KEY)
    config: ConfigType<typeof envConfig>,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.auth.jwtSecret,
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.authService.validateUserPayload(payload);

    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
