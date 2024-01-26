import { z } from 'zod';

import { validationMessages } from 'src/constants';
import { uriSchema } from 'src/features/common/validations';

export const createArticleSchema = z.object({
  title: z
    .string()
    .min(15, validationMessages.articleTitleMin)
    .max(100, validationMessages.articleTitleMax),
  img: uriSchema,
  alt: z.string().min(3, validationMessages.altMin).max(30, validationMessages.altMax),
  content: z.string().min(20, validationMessages.articleContentMin),
  showComments: z.boolean().default(false),
  category: z.string().min(1),
  conference: z.string().min(1),
  team: z.string().min(1),
  location: z.string().min(1),
});
