import { CreateTeamDto } from 'src/features/categories/dto/create-team.dto';

export class UpdateTeamDto extends CreateTeamDto {
  conferenceId: string;
}
