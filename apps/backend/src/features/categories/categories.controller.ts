import { Body, Controller, Delete, Get, Param, Patch, Post, UseFilters } from '@nestjs/common';

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
import { QueryFailedExceptionFilter } from 'src/features/common/exceptions';

@UseFilters(new QueryFailedExceptionFilter())
@Controller('categories')
export class CategoriesController {
  constructor(
    private categoriesService: CategoriesService,
    private conferencesService: ConferencesService,
    private teamsService: TeamsService,
  ) {}

  @Post()
  async createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    const category = await this.categoriesService.create(createCategoryDto);

    return category;
  }

  @Get()
  async getAllCategories() {
    const categories = await this.categoriesService.getAll();

    return categories;
  }

  @Get(':categoryId')
  async getCategory(@Param('categoryId') categoryId: string) {
    const categories = await this.categoriesService.getById(categoryId);

    return categories;
  }

  @Patch(':categoryId')
  async updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() updateCategoryDto: CreateCategoryDto,
  ) {
    const updatedCategory = await this.categoriesService.update(categoryId, updateCategoryDto);

    return updatedCategory;
  }

  @Delete(':categoryId')
  async removeCategory(@Param('categoryId') categoryId: string) {
    const result = await this.categoriesService.remove(categoryId);

    return result;
  }

  @Post('conferences/:categoryId')
  async createConference(
    @Param('categoryId') categoryId: string,
    @Body() createConferenceDto: CreateConferenceDto,
  ) {
    const result = await this.conferencesService.create(categoryId, createConferenceDto);

    return result;
  }

  @Get('conferences')
  async getAllConferences() {
    const conferences = await this.conferencesService.getAll();

    return conferences;
  }

  @Get('conferences/:conferenceId')
  async getConference(@Param('conferenceId') conferenceId: string) {
    const conference = await this.conferencesService.getById(conferenceId);

    return conference;
  }

  @Patch('conferences/:conferenceId')
  async updateConference(
    @Param('conferenceId') conferenceId: string,
    @Body() updateConferenceDto: UpdateConferenceDto,
  ) {
    const updatedConference = this.conferencesService.update(conferenceId, updateConferenceDto);

    return updatedConference;
  }

  @Delete('conferences/:conferenceId')
  async removeConference(@Param('conferenceId') conferenceId: string) {
    const result = this.conferencesService.remove(conferenceId);

    return result;
  }

  @Post('teams/:conferenceId')
  async createTeam(
    @Param('conferenceId') conferenceId: string,
    @Body() createTeamDto: CreateConferenceDto,
  ) {
    const result = await this.teamsService.create(conferenceId, createTeamDto);

    return result;
  }

  @Get('teams')
  async geAllTeams() {
    const teams = await this.teamsService.getAll();

    return teams;
  }

  @Get('teams/:teamId')
  async getTeam(@Param('teamId') teamId: string) {
    const team = this.teamsService.getById(teamId);

    return team;
  }

  @Patch('teams/:teamId')
  async updateTeam(@Param('teamId') teamId: string, @Body() updateTeamDto: UpdateTeamDto) {
    const updatedTeam = await this.teamsService.update(teamId, updateTeamDto);

    return updatedTeam;
  }

  @Delete('teams/:teamId')
  async deleteTema(@Param('teamId') teamId: string) {
    const result = await this.teamsService.remove(teamId);

    return result;
  }
}
