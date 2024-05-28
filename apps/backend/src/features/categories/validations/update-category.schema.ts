import { z } from 'zod';

import { ctaegoriesTitleSchema } from 'src/features/common/validations';

export const updateCategorySchema = z.object({
  title: ctaegoriesTitleSchema.optional(),
});
