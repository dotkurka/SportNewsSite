import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTeamDto, UpdateTeamDto } from 'src/features/categories/dto';
import { Teams } from 'src/features/categories/entities';
import { ConferencesService } from 'src/features/categories/services/conferences.service';

@Injectable()
export class TeamsService {
  constructor(
    private readonly conferencesServise: ConferencesService,
    @InjectRepository(Teams) private readonly teamsRepository: Repository<Teams>,
  ) {}

  async create(conferenceId: string, createTeamDto: CreateTeamDto) {
    const conference = await this.conferencesServise.getById(conferenceId);
    const team = new Teams({ ...createTeamDto });

    conference.teams.push(team);

    const result = await this.conferencesServise.saveConference(conference);

    return result;
  }

  async getAll() {
    const teams = await this.teamsRepository.find();

    return teams;
  }

  async getById(id: string) {
    const team = await this.teamsRepository.findOneBy({ id });
    if (!team) {
      throw new NotFoundException();
    }

    return team;
  }

  async update(id: string, updateTeamDto: UpdateTeamDto) {
    const { conferenceId, ...updateDto } = updateTeamDto;
    const conference = await this.conferencesServise.getById(conferenceId);

    await this.teamsRepository.update(id, { ...updateDto, conference });

    return this.getById(id);
  }

  async remove(id: string) {
    const team = await this.getById(id);

    await this.teamsRepository.delete(team.id);

    return { message: 'success' };
  }
}
