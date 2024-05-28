import { Body, Controller, Get, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

import { Authorized } from 'src/features/auth/decorators';
import { SignUpDto } from 'src/features/auth/dto';
import { LocalAuthGuard } from 'src/features/auth/guards';
import { RequestWithUser } from 'src/features/auth/interfaces';
import { AuthService } from 'src/features/auth/services/auth.service';
import { ZodValidationPipe } from 'src/features/common/pipes';
import { createUserSchema } from 'src/features/users/validations';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(ThrottlerGuard)
  @Post('sign-up')
  async singUp(@Body(new ZodValidationPipe(createUserSchema)) singUpDto: SignUpDto) {
    const token = await this.authService.signUp(singUpDto);

    return token;
  }

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  async signIn(@Req() req: RequestWithUser) {
    const token = await this.authService.logIn(req.user);

    return token;
  }

  @Authorized()
  @Get('profile')
  getProfile(@Req() req: RequestWithUser) {
    return req.user;
  }
}
