import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseFilters } from '@nestjs/common';

import { articleFilterParams, articleSortParams } from 'src/features/articles/constants';
import { CreateArticleDto } from 'src/features/articles/dto';
import { Article } from 'src/features/articles/entities';
import { ArticlesService } from 'src/features/articles/services';
import { createArticleSchema, updateArticleSchema } from 'src/features/articles/validations';
import { Authorized } from 'src/features/auth';
import { RequestWithUser } from 'src/features/auth/interfaces';
import {
  Filtering,
  FilteringParams,
  Pagination,
  PaginationParams,
  Sorting,
  SortingParams,
} from 'src/features/common/decorators';
import { PaginationResponseDto } from 'src/features/common/dto';
import { QueryFailedExceptionFilter } from 'src/features/common/exceptions';
import { ZodValidationPipe } from 'src/features/common/pipes';

@UseFilters(new QueryFailedExceptionFilter())
@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Authorized()
  @Post()
  async createArticle(
    @Req() req: RequestWithUser,
    @Body(new ZodValidationPipe(createArticleSchema)) createArticleDto: CreateArticleDto,
  ) {
    const article = await this.articlesService.create(req.user, createArticleDto);

    return article;
  }

  @Get()
  async getArticles(
    @PaginationParams() paginationParams: Pagination,
    @SortingParams(articleSortParams) sort?: Sorting,
    @FilteringParams(articleFilterParams)
    filter?: Filtering,
  ): Promise<PaginationResponseDto<Article>> {
    const result = await this.articlesService.getAll(paginationParams, sort, filter);

    return result;
  }

  @Get(':slugId')
  async getArticle(@Param('slugId') slugId: string) {
    const article = await this.articlesService.getBySlugId(slugId);

    return article;
  }

  @Patch(':id')
  async updateArticle(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateArticleSchema)) updateArticleDto: CreateArticleDto,
  ) {
    const updatedArticle = await this.articlesService.update(id, updateArticleDto);

    return updatedArticle;
  }

  @Delete(':id')
  async removeArticle(@Param('id') id: string) {
    const result = await this.articlesService.remove(id);

    return result;
  }
}
