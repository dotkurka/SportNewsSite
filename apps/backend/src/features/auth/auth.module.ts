import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthController } from 'src/features/auth/auth.controller';
import { AuthService } from 'src/features/auth/auth.service';
import { LocalStrategy } from 'src/features/auth/strategies';
import { UsersModule } from 'src/features/users/users.module';

@Module({
  imports: [UsersModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
