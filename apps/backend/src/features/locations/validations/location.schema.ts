import { z } from 'zod';

import { validationMessages } from 'src/constants';

export const locationSchema = z.object({
  name: z.string().min(3).max(50, validationMessages.locationNameMax),
});
