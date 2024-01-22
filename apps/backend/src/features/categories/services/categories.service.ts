import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCategoryDto } from 'src/features/categories/dto';
import { Categories } from 'src/features/categories/entities';

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
  async getAll() {
    const categories = await this.categoriesRepository.find();

    return categories;
  }

  async getById(id: string): Promise<Categories> {
    const category = await this.categoriesRepository.findOneBy({ id });
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
