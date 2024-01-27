import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesController } from 'src/features/articles/articles.controller';
import { Article, Comment } from 'src/features/articles/entities';
import { ArticlesService, CommentsService } from 'src/features/articles/services';
import { CategoriesModule } from 'src/features/categories';
import { LocationModule } from 'src/features/locations';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Comment]), CategoriesModule, LocationModule],
  controllers: [ArticlesController],
  providers: [ArticlesService, CommentsService],
})
export class ArticlesModule {}
