import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { errorMessages } from 'src/constants';
import { Location } from 'src/features/articles/entities';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location) private readonly locationsRepository: Repository<Location>,
  ) {}

  async getById(id: string) {
    const location = await this.locationsRepository.findOneBy({ id });

    if (!location) throw new NotFoundException(`${errorMessages.notFound} location`);

    return location;
  }
}
