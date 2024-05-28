import { z } from 'zod';

import { ctaegoriesTitleSchema } from 'src/features/common/validations';

export const updateConferenceSchema = z.object({
  title: ctaegoriesTitleSchema.optional(),
  categoryId: z.string().optional(),
});
