import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoriesController } from 'src/features/categories/categories.controller';
import { Categories, Conferences, Teams } from 'src/features/categories/entities';
import {
  CategoriesService,
  ConferencesService,
  TeamsService,
} from 'src/features/categories/services';

@Module({
  imports: [TypeOrmModule.forFeature([Categories, Conferences, Teams])],
  controllers: [CategoriesController],
  providers: [CategoriesService, ConferencesService, TeamsService],
  exports: [CategoriesService, ConferencesService, TeamsService],
})
export class CategoriesModule {}
