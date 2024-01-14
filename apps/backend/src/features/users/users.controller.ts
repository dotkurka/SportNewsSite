import { Controller, Get } from '@nestjs/common';

import { UsersService } from 'src/features/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
