import type { IUser } from 'features/auth/types';

export interface INavBarUser {
  user?: IUser;
}

export interface INavBarUserMenu extends INavBarUser {
  className?: string;
}
