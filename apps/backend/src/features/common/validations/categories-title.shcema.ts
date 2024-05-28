import { z } from 'zod';

import { validationMessages } from 'src/constants';

export const ctaegoriesTitleSchema = z
  .string()
  .min(2, validationMessages.categotyTitleMin)
  .max(30, validationMessages.categotyTitleMax)
  .refine(
    (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
    validationMessages.fieldOnlyAlphabets,
  );
