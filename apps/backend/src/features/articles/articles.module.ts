import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ArticlesController } from 'src/features/articles/articles.controller';
import { ArticlesService } from 'src/features/articles/articles.service';
import { Article, Comment, Location } from 'src/features/articles/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Article, Comment, Location])],
  controllers: [ArticlesController],
  providers: [ArticlesService],
})
export class ArticlesModule {}
