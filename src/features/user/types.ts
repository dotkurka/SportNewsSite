import type { UserRole } from 'features/auth/enums';

export interface IUser {
  id: string;
  role: UserRole;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  articles?: [];
  surveys?: [];
  teamHub?: [];
}

export interface IUserUpdate {
  avatar?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface IPasswordUpdate {
  password?: string;
  newPassword?: string;
}

export type UserUpdateType = IUserUpdate & IPasswordUpdate;
