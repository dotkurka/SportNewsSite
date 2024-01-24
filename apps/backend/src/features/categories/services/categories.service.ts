import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto } from 'src/features/categories/dto';
import { Categories } from 'src/features/categories/entities';
import { Filtering, Sorting } from 'src/features/common/decorators';
import { getOrder, getWhere } from 'src/utils';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories) private readonly categoriesRepository: Repository<Categories>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const category = new Categories({
      ...createCategoryDto,
      conferences: [],
    });

    const newCategory = await this.saveCategory(category);

    return newCategory;
  }
  // TODO: make sort and filter

  async getAll(sort?: Sorting, filter?: Filtering) {
    const where = getWhere(filter);
    const order = getOrder(sort);
    const categories = await this.categoriesRepository.find({
      relations: { conferences: { category: true, teams: { conference: true } } },
      where,
      order,
    });

    return categories;
  }

  async getById(id: string) {
    const category = await this.categoriesRepository.findOne({
      where: { id },
      relations: { conferences: { category: true, teams: { conference: true } } },
    });

    if (!category) {
      throw new NotFoundException();
    }

    return category;
  }

  async update(id: string, updateCategoryDto: CreateCategoryDto) {
    await this.categoriesRepository.update(id, { ...updateCategoryDto });

    return this.getById(id);
  }

  async remove(id: string) {
    const category = await this.getById(id);

    await this.categoriesRepository.delete(category.id);

    return { message: 'success' };
  }

  async saveCategory(category: Categories): Promise<Categories> {
    const result = await this.categoriesRepository.save(category);

    return result;
  }
}
