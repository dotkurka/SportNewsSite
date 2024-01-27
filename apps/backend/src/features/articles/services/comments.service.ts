import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateCommnetDto } from 'src/features/articles/dto';
import { Comment } from 'src/features/articles/entities';
import { ArticlesService } from 'src/features/articles/services/articles.service';
import { Pagination, Sorting } from 'src/features/common/decorators';
import { PaginationResponseDto } from 'src/features/common/dto';
import { User } from 'src/features/users';
import { getOrder } from 'src/utils';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private readonly commentsRepository: Repository<Comment>,
    private readonly articlesService: ArticlesService,
  ) {}

  async create(articleId: string, user: User, createCommnetDto: CreateCommnetDto) {
    const article = await this.articlesService.getById(articleId);
    const newComment = new Comment({ ...createCommnetDto, user });

    article.comments.push(newComment);

    await this.articlesService.saveArticle(article);

    return newComment;
  }

  async getByArticleId(
    articleId: string,
    paginationParams: Pagination,
    sort?: Sorting,
  ): Promise<PaginationResponseDto<Comment>> {
    const { page, limit, offset } = paginationParams;
    const order = getOrder(sort);

    const [comments, total] = await this.commentsRepository.findAndCount({
      where: { article: { id: articleId } },
      order,
      take: limit,
      skip: offset,
    });

    return { total, data: comments, page, limit };
  }

  async getById(commentId: string) {
    const comment = await this.commentsRepository.findOneBy({ id: commentId });

    if (!comment) throw new NotFoundException();

    return comment;
  }

  async remove(commentId: string) {
    const comment = await this.getById(commentId);

    await this.commentsRepository.remove(comment);

    return { message: 'Success' };
  }
}
