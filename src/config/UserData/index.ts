import { UserRole } from 'features/auth/enums';

import type { IUser } from 'features/auth/types';

export const userMock: IUser = {
  role: UserRole.User,
  firstName: 'Bogdan',
  lastName: 'Kisa',
  id: 'sdsd89834343347374837478',
  email: 'example@gmail.com',
};
