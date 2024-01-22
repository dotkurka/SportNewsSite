import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateConferenceDto, UpdateConferenceDto } from 'src/features/categories/dto';
import { Conferences } from 'src/features/categories/entities';
import { CategoriesService } from 'src/features/categories/services/categories.service';

@Injectable()
export class ConferencesService {
  constructor(
    @InjectRepository(Conferences) private readonly conferencesRepository: Repository<Conferences>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async create(categoryId: string, createConferenceDto: CreateConferenceDto) {
    const categoty = await this.categoriesService.getById(categoryId);
    const conference = new Conferences({
      ...createConferenceDto,
      teams: [],
    });

    categoty.conferences.push(conference);

    const result = await this.categoriesService.saveCategory(categoty);

    return result;
  }

  // TODO: get conference by category id and add sort
  async getAll() {
    const conferences = await this.conferencesRepository.find();

    return conferences;
  }

  async getById(id: string): Promise<Conferences> {
    const conference = await this.conferencesRepository.findOneBy({ id });
    if (!conference) {
      throw new NotFoundException();
    }

    return conference;
  }

  async update(id: string, updateConferenceDto: UpdateConferenceDto) {
    const { categoryId, ...updateDto } = updateConferenceDto;
    const category = await this.categoriesService.getById(categoryId);

    await this.conferencesRepository.update(id, { ...updateDto, category });

    return this.getById(id);
  }

  async remove(id: string) {
    const conference = await this.getById(id);

    await this.conferencesRepository.delete(conference.id);

    return { message: 'success' };
  }

  async saveConference(conference: Conferences) {
    const result = await this.conferencesRepository.save(conference);

    return result;
  }
}
