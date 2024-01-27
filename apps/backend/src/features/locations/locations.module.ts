import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Location } from 'src/features/locations/entities';
import { LocationsController } from 'src/features/locations/locations.controller';
import { LocationsService } from 'src/features/locations/locations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Location])],
  controllers: [LocationsController],
  providers: [LocationsService],
  exports: [LocationsService],
})
export class LocationModule {}
