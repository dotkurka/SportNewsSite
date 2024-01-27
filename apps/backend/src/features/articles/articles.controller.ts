import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';

import {
  articleFilterParams,
  articleSortParams,
  commentSortParams,
} from 'src/features/articles/constants';
import { CreateArticleDto, CreateCommnetDto } from 'src/features/articles/dto';
import { Article, Comment } from 'src/features/articles/entities';
import { ArticlesService, CommentsService } from 'src/features/articles/services';
import {
  createArticleSchema,
  createCommentShema,
  updateArticleSchema,
} from 'src/features/articles/validations';
import { Authorized, Roles, RolesGuard, UserRole } from 'src/features/auth';
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

@Authorized(UserRole.Admin)
@UseFilters(QueryFailedExceptionFilter)
@Controller('articles')
export class ArticlesController {
  constructor(
    private readonly articlesService: ArticlesService,
    private readonly commentsService: CommentsService,
  ) {}

  @Post()
  async createArticle(
    @Req() req: RequestWithUser,
    @Body(new ZodValidationPipe(createArticleSchema)) createArticleDto: CreateArticleDto,
  ) {
    const article = await this.articlesService.create(req.user, createArticleDto);

    return article;
  }

  @Roles(UserRole.User)
  @UseGuards(RolesGuard)
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

  @Roles(UserRole.User)
  @UseGuards(RolesGuard)
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

  @Roles(UserRole.User)
  @UseGuards(RolesGuard)
  @Post(':articleId/comments')
  async createComment(
    @Param('articleId') articleId: string,
    @Req() req: RequestWithUser,
    @Body(new ZodValidationPipe(createCommentShema)) createCommnetDto: CreateCommnetDto,
  ) {
    const comment = await this.commentsService.create(articleId, req.user, createCommnetDto);

    return comment;
  }

  @Roles(UserRole.User)
  @UseGuards(RolesGuard, ThrottlerGuard)
  @Get(':articleId/comments')
  async getArticleComments(
    @Param('articleId') articleId: string,
    @PaginationParams() paginationParams: Pagination,
    @SortingParams(commentSortParams) sort?: Sorting,
  ): Promise<PaginationResponseDto<Comment>> {
    const result = await this.commentsService.getByArticleId(articleId, paginationParams, sort);

    return result;
  }

  @Delete('comments/:commentId')
  async removeComment(@Param('commentId') commentId: string) {
    const result = await this.commentsService.remove(commentId);

    return result;
  }
}
