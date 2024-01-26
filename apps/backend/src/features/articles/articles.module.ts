import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesController } from 'src/features/articles/articles.controller';
import { Article, Comment, Location } from 'src/features/articles/entities';
import { ArticlesService, LocationsService } from 'src/features/articles/services';
import { CategoriesModule } from 'src/features/categories';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Comment, Location]), CategoriesModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, LocationsService],
})
export class ArticlesModule {}
