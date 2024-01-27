import { z } from 'zod';

import { validationMessages } from 'src/constants';

export const createCommentShema = z.object({
  comment: z.string().min(3).max(350, validationMessages.commentMax),
});
