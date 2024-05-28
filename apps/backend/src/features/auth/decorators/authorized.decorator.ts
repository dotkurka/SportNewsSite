import { UseGuards, applyDecorators } from '@nestjs/common';

import { Roles } from 'src/features/auth/decorators/role.decorator';
import { UserRole } from 'src/features/auth/enums';
import { RolesGuard } from 'src/features/auth/guards';
import { JwtAuthGuard } from 'src/features/auth/guards/jwt-auth.guard';

export const Authorized = (...roles: UserRole[]) => {
  const decorators = [UseGuards(JwtAuthGuard)];

  if (roles.length) {
    decorators.push(UseGuards(RolesGuard), Roles(...roles));
  }

  return applyDecorators(...decorators);
};
