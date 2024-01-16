import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { JwtService as NestJwtService } from '@nestjs/jwt';

import envConfig from 'src/config/env.config';

@Injectable()
export class JwtService extends NestJwtService {
  constructor(
    @Inject(envConfig.KEY)
    config: ConfigType<typeof envConfig>,
  ) {
    super({
      secret: config.auth.jwtSecret,
      signOptions: { expiresIn: config.auth.tokenDuration },
    });
  }
}
