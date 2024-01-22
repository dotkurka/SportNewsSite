import { CreateConferenceDto } from 'src/features/categories/dto/create-conference.dto';

export class UpdateConferenceDto extends CreateConferenceDto {
  categoryId: string;
}
