import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateArticleDto } from 'src/features/articles/dto';
import { Article } from 'src/features/articles/entities';
import { CategoriesService, ConferencesService, TeamsService } from 'src/features/categories';
import { Filtering, Pagination, Sorting } from 'src/features/common/decorators';
import { PaginationResponseDto } from 'src/features/common/dto';
import { LocationsService } from 'src/features/locations';
import { User } from 'src/features/users';
import { generateSlugId, getOrder, getWhere } from 'src/utils';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article) private readonly articlesRepository: Repository<Article>,
    private categoriesService: CategoriesService,
    private conferencesService: ConferencesService,
    private teamsService: TeamsService,
    private locationsService: LocationsService,
  ) {}

  async create(user: User, createArticleDto: CreateArticleDto) {
    const {
      category: categoryId,
      conference: conferenceId,
      team: teamId,
      location: locationId,
      title,
      ...categoryDto
    } = createArticleDto;

    const slugId = generateSlugId(title);
    const category = await this.categoriesService.getById(categoryId, false);
    const conference = await this.conferencesService.getById(conferenceId, false);
    const team = await this.teamsService.getById(teamId);
    const location = await this.locationsService.getById(locationId);
    const newArticle = new Article({
      ...categoryDto,
      title,
      slugId,
      category,
      conference,
      team,
      location,
      user,
      comments: [],
    });

    await this.saveArticle(newArticle);

    return newArticle;
  }

  async getAll(
    paginationParams: Pagination,
    sort?: Sorting,
    filter?: Filtering[],
  ): Promise<PaginationResponseDto<Article>> {
    const where = getWhere(filter);
    const order = getOrder(sort);
    const { page, limit, offset } = paginationParams;

    const [articles, total] = await this.articlesRepository.findAndCount({
      where,
      order,
      skip: offset,
      take: limit,
    });

    return { total, data: articles, page, limit };
  }

  async getBySlugId(slugId: string) {
    const article = await this.articlesRepository.findOneBy({ slugId });
    if (!article) throw new NotFoundException();

    await this.articlesRepository.increment({ slugId }, 'views', 1);

    return article;
  }

  async getById(id: string) {
    const article = await this.articlesRepository.findOneBy({ id });
    if (!article) throw new NotFoundException();

    return article;
  }

  async update(id: string, updateArticleDto: CreateArticleDto) {
    const {
      category: categoryId,
      conference: conferenceId,
      team: teamId,
      location: locationId,
      ...updateDto
    } = updateArticleDto;

    const article = await this.getById(id);

    this.articlesRepository.merge(article, updateDto);

    if (categoryId) {
      const category = await this.categoriesService.getById(categoryId);
      article.category = category;
    }

    if (conferenceId) {
      const conference = await this.conferencesService.getById(conferenceId);
      article.conference = conference;
    }

    if (teamId) {
      const team = await this.teamsService.getById(teamId);
      article.team = team;
    }

    if (locationId) {
      const location = await this.locationsService.getById(locationId);
      article.location = location;
    }

    const updatedArticle = await this.saveArticle(article);

    return this.getById(updatedArticle.id);
  }

  async remove(id: string) {
    const article = await this.getById(id);

    await this.articlesRepository.remove(article);

    return { message: 'success' };
  }

  async saveArticle(article: Article) {
    const newArticle = await this.articlesRepository.save(article);

    return newArticle;
  }
}
