import { Controller, Get, UseGuards } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

import { AppService } from 'src/app/app.service';
import { HealthCheckDto } from 'src/app/dto/health-check.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ThrottlerGuard)
  @Get()
  getHealthCheck(): HealthCheckDto {
    return this.appService.getHealthCheck();
  }
}
