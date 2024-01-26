import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { errorMessages } from 'src/constants';
import { CreateConferenceDto, UpdateConferenceDto } from 'src/features/categories/dto';
import { Conferences } from 'src/features/categories/entities';
import { CategoriesService } from 'src/features/categories/services/categories.service';
import { Filtering, Sorting } from 'src/features/common/decorators';
import { getOrder, getWhere } from 'src/utils';

@Injectable()
export class ConferencesService {
  constructor(
    @InjectRepository(Conferences) private readonly conferencesRepository: Repository<Conferences>,
    private readonly categoriesService: CategoriesService,
  ) {}

  async create(categoryId: string, createConferenceDto: CreateConferenceDto) {
    const categoty = await this.categoriesService.getById(categoryId);
    const newConference = new Conferences({
      ...createConferenceDto,
      teams: [],
    });

    categoty.conferences.push(newConference);

    await this.categoriesService.saveCategory(categoty);

    return newConference;
  }

  // TODO: get conference by category id and add sort
  async getByCategory(category: string, sort?: Sorting, filter?: Filtering) {
    const order = getOrder(sort);
    const where = getWhere(filter);
    const conferences = await this.conferencesRepository.find({
      where: { ...where, category: { title: category } },
      relations: { category: true, teams: { conference: true } },
      order,
    });

    return conferences;
  }

  async getById(id: string, relations: boolean | undefined = true): Promise<Conferences> {
    const conference = await this.conferencesRepository.findOne({
      where: { id },
      relations: relations ? { category: true, teams: { conference: true } } : {},
    });

    if (!conference) throw new NotFoundException(`${errorMessages.notFound} conference`);

    return conference;
  }

  async update(id: string, updateConferenceDto: UpdateConferenceDto) {
    const { categoryId, ...updateDto } = updateConferenceDto;
    if (categoryId) {
      const category = await this.categoriesService.getById(categoryId);
      await this.conferencesRepository.update(id, { ...updateDto, category });
    } else {
      await this.conferencesRepository.update(id, { ...updateDto });
    }

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
