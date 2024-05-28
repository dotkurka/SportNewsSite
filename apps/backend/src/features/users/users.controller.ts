import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common';

import { Authorized } from 'src/features/auth/decorators';
import { UserRole } from 'src/features/auth/enums';
import { RequestWithUser } from 'src/features/auth/interfaces';
import { ZodValidationPipe } from 'src/features/common/pipes';
import { UpdateUserDto } from 'src/features/users/dto';
import { UsersService } from 'src/features/users/users.service';
import { updateUserSchema } from 'src/features/users/validations';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Authorized(UserRole.Admin)
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Authorized(UserRole.Admin)
  @Get(':id')
  findOne(@Param() id: string) {
    return this.usersService.findOneById(id);
  }

  @Authorized()
  @Patch()
  async update(
    @Req() req: RequestWithUser,
    @Body(new ZodValidationPipe(updateUserSchema)) updateUserDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(req.user.id, updateUserDto);

    return user;
  }
}
