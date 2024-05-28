import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';

import { Authorized, Roles, RolesGuard, UserRole } from 'src/features/auth';
import { Filtering, FilteringParams, Sorting, SortingParams } from 'src/features/common/decorators';
import { QueryFailedExceptionFilter } from 'src/features/common/exceptions';
import { ZodValidationPipe } from 'src/features/common/pipes';
import { CreateLocationDto } from 'src/features/locations/dto';
import { LocationsService } from 'src/features/locations/locations.service';
import { locationSchema } from 'src/features/locations/validations';

@Authorized(UserRole.Admin)
@UseFilters(QueryFailedExceptionFilter)
@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService) {}

  @Post()
  async createLocation(
    @Body(new ZodValidationPipe(locationSchema)) createLocationDto: CreateLocationDto,
  ) {
    const newLocation = await this.locationsService.create(createLocationDto);

    return newLocation;
  }

  @Roles(UserRole.User)
  @UseGuards(RolesGuard)
  @Get()
  async getAll(
    @FilteringParams(['name']) filter?: Filtering[],
    @SortingParams(['name']) sort?: Sorting,
  ) {
    const locations = await this.locationsService.getAll(filter, sort);

    return locations;
  }

  @Roles(UserRole.User)
  @UseGuards(RolesGuard)
  @Get(':id')
  async getLocationById(@Param('id') id: string) {
    const location = await this.locationsService.getById(id);

    return location;
  }

  @Patch(':id')
  async updateLocation(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(locationSchema)) updateLocationDto: CreateLocationDto,
  ) {
    const updatedLocation = await this.locationsService.update(id, updateLocationDto);

    return updatedLocation;
  }

  @Delete(':id')
  async removeLocation(@Param('id') id: string) {
    const result = await this.locationsService.remove(id);

    return result;
  }
}
