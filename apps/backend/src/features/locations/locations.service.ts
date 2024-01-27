import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { errorMessages } from 'src/constants';
import { Filtering, Sorting } from 'src/features/common/decorators';
import { CreateLocationDto } from 'src/features/locations/dto';
import { Location } from 'src/features/locations/entities';
import { getOrder, getWhere } from 'src/utils';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location) private readonly locationsRepository: Repository<Location>,
  ) {}

  async create(createLocationDto: CreateLocationDto) {
    const newLocation = new Location(createLocationDto);

    await this.locationsRepository.insert(newLocation);

    return newLocation;
  }

  async getAll(filter?: Filtering, sort?: Sorting) {
    const where = getWhere(filter);
    const order = getOrder(sort);

    const locations = await this.locationsRepository.find({ where, order });

    return locations;
  }

  async getById(id: string) {
    const location = await this.locationsRepository.findOneBy({ id });

    if (!location) throw new NotFoundException(`${errorMessages.notFound} location`);

    return location;
  }

  async update(id: string, updateLocationDto: CreateLocationDto) {
    await this.locationsRepository.update(id, { ...updateLocationDto });

    return this.getById(id);
  }

  async remove(id: string) {
    const location = await this.getById(id);

    await this.locationsRepository.remove(location);

    return { message: 'Success' };
  }
}
