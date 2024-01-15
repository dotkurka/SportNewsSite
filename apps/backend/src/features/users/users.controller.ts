import { Body, Controller, Get, Param, Patch, Req } from '@nestjs/common';

import { RequestWithUser } from 'src/features/auth/interfaces';
import { ZodValidationPipe } from 'src/features/common/pipes';
import { UpdateUserDto } from 'src/features/users/dto';
import { UsersService } from 'src/features/users/users.service';
import { updateUserSchema } from 'src/features/users/validations/update-user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string) {
    return this.usersService.findOneById(id);
  }

  @Patch()
  update(
    @Req() req: RequestWithUser,
    @Body(new ZodValidationPipe(updateUserSchema)) updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(req.user.id, updateUserDto);
  }
}
