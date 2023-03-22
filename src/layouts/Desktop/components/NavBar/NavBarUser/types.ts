import type { IUser } from 'features/auth/types';

export interface IUserData {
  image?: string;
  status?: string;
}

export type TUser = IUser & IUserData;

export interface IBarUser {
  user?: TUser | undefined;
}
