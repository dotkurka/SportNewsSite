import { z } from 'zod';

import { ctaegoriesTitleSchema } from 'src/features/common/validations';

export const updateTeamSchema = z.object({
  title: ctaegoriesTitleSchema.optional(),
  conferenceId: z.string().optional(),
});
