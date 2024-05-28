import { z } from 'zod';

import { emailSchema, passwordSchema, usernameSchema } from 'src/features/common/validations';

export const createUserSchema = z.object({
  firstName: usernameSchema,
  lastName: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});
