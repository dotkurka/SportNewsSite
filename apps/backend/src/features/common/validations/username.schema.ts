import { z } from 'zod';

import { validationMessages } from 'src/constants';

export const usernameSchema = z
  .string()
  .min(3, { message: validationMessages.usernameMin })
  .max(50, { message: validationMessages.usernameMax });
