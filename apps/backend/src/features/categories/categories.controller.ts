import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
  UseGuards,
} from '@nestjs/common';

import { Authorized, Roles, RolesGuard, UserRole } from 'src/features/auth';
import {
  CreateCategoryDto,
  CreateConferenceDto,
  UpdateConferenceDto,
  UpdateTeamDto,
} from 'src/features/categories/dto';
import {
  CategoriesService,
  ConferencesService,
  TeamsService,
} from 'src/features/categories/services';
import {
  createCategoriesSchema,
  updateCategorySchema,
  updateConferenceSchema,
  updateTeamSchema,
} from 'src/features/categories/validations';
import { Filtering, FilteringParams, Sorting, SortingParams } from 'src/features/common/decorators';
import { QueryFailedExceptionFilter } from 'src/features/common/exceptions';
import { ZodValidationPipe } from 'src/features/common/pipes';

@Authorized(UserRole.Admin)
@UseFilters(new QueryFailedExceptionFilter())
@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private conferencesService: ConferencesService,
    private teamsService: TeamsService,
  ) {}

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Post()
  async createCategory(
    @Body(new ZodValidationPipe(createCategoriesSchema)) createCategoryDto: CreateCategoryDto,
  ) {
    const category = await this.categoriesService.create(createCategoryDto);

    return category;
  }

  async getAllCategories(
    @SortingParams(['title']) sort?: Sorting,
    @FilteringParams(['title', 'conferences.title']) filter?: Filtering,
  ) {
    const categories = await this.categoriesService.getAll(sort, filter);

    return categories;
  }

  @Get(':categoryId')
  async getCategory(@Param('categoryId') categoryId: string) {
    const categories = await this.categoriesService.getById(categoryId);

    return categories;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Patch(':categoryId')
  async updateCategory(
    @Param('categoryId') categoryId: string,
    @Body(new ZodValidationPipe(updateCategorySchema)) updateCategoryDto: CreateCategoryDto,
  ) {
    const updatedCategory = await this.categoriesService.update(categoryId, updateCategoryDto);

    return updatedCategory;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Delete(':categoryId')
  async removeCategory(@Param('categoryId') categoryId: string) {
    const result = await this.categoriesService.remove(categoryId);

    return result;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Post(':categoryId/conferences')
  async createConference(
    @Param('categoryId') categoryId: string,
    @Body(new ZodValidationPipe(createCategoriesSchema)) createConferenceDto: CreateConferenceDto,
  ) {
    const result = await this.conferencesService.create(categoryId, createConferenceDto);

    return result;
  }

  @Get(':category/conferences/')
  async getConferencesByCategory(
    @Param('category') category: string,
    @SortingParams(['title']) sort?: Sorting,
    @FilteringParams(['title', 'teams.title']) filter?: Filtering,
  ) {
    const conferences = await this.conferencesService.getByCategory(category, sort, filter);

    return conferences;
  }

  @Get('conferences/:conferenceId')
  async getConference(@Param('conferenceId') conferenceId: string) {
    const conference = await this.conferencesService.getById(conferenceId);

    return conference;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Patch('conferences/:conferenceId')
  async updateConference(
    @Param('conferenceId') conferenceId: string,
    @Body(new ZodValidationPipe(updateConferenceSchema)) updateConferenceDto: UpdateConferenceDto,
  ) {
    const updatedConference = this.conferencesService.update(conferenceId, updateConferenceDto);

    return updatedConference;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Delete('conferences/:conferenceId')
  async removeConference(@Param('conferenceId') conferenceId: string) {
    const result = this.conferencesService.remove(conferenceId);

    return result;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Post(':conferenceId/teams')
  async createTeam(
    @Param('conferenceId') conferenceId: string,
    @Body(new ZodValidationPipe(createCategoriesSchema)) createTeamDto: CreateConferenceDto,
  ) {
    const result = await this.teamsService.create(conferenceId, createTeamDto);

    return result;
  }

  @Get(':category/teams')
  async geAllTeams(
    @Param('category') category: string,
    @SortingParams(['title']) sort?: Sorting,
    @FilteringParams(['title']) filter?: Filtering,
  ) {
    const teams = await this.teamsService.getByCategory(category, sort, filter);

    return teams;
  }

  @Get('teams/:teamId')
  async getTeam(@Param('teamId') teamId: string) {
    const team = this.teamsService.getById(teamId);

    return team;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Patch('teams/:teamId')
  async updateTeam(
    @Param('teamId') teamId: string,
    @Body(new ZodValidationPipe(updateTeamSchema)) updateTeamDto: UpdateTeamDto,
  ) {
    const updatedTeam = await this.teamsService.update(teamId, updateTeamDto);

    return updatedTeam;
  }

  @Roles(UserRole.Admin)
  @UseGuards(RolesGuard)
  @Delete('teams/:teamId')
  async deleteTema(@Param('teamId') teamId: string) {
    const result = await this.teamsService.remove(teamId);

    return result;
  }
}
