import type { IUser } from 'features/user/types';

export interface INavBarUser {
  user?: IUser;
}

export interface INavBarUserMenu extends INavBarUser {
  className?: string;
  handleCloseMenu: () => void;
}
