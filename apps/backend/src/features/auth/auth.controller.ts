import { Controller, Post, Req, UseGuards } from '@nestjs/common';

import { AuthService } from 'src/features/auth/auth.service';
import { LocalAuthGuard } from 'src/features/auth/guards';
import { RequestWithUser } from 'src/features/auth/interfaces';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('sign-in')
  signIn(@Req() req: RequestWithUser) {
    return req.user;
  }
}
