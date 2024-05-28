import { z } from 'zod';

import { validationMessages } from 'src/constants';

export const passwordSchema = z
  .string()
  .min(8, { message: validationMessages.passwordMin })
  .max(255);
