import { z } from 'zod';

import { validationMessages } from 'src/constants';

export const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .email(validationMessages.emailInvalid)
  .min(1, { message: validationMessages.emailIsRequired })
  .max(100);
