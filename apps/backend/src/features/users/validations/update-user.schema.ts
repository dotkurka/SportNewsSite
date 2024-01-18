import { z } from 'zod';

import { emailSchema, uriSchema, usernameSchema } from 'src/features/common/validations';

export const updateUserSchema = z.object({
  firstName: usernameSchema.optional(),
  lastName: usernameSchema.optional(),
  email: emailSchema.optional(),
  avatar: uriSchema.optional(),
});
