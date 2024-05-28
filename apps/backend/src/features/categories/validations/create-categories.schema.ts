import { z } from 'zod';

import { ctaegoriesTitleSchema } from 'src/features/common/validations';

export const createCategoriesSchema = z.object({
  title: ctaegoriesTitleSchema,
});
