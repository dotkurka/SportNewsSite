import { z } from 'zod';

import { emailSchema, imageSchema, usernameSchema } from 'src/features/common/validations';

export const updateUserSchema = z.object({
  firstName: usernameSchema.optional(),
  lastName: usernameSchema.optional(),
  email: emailSchema.optional(),
  avatar: imageSchema.optional(),
});
