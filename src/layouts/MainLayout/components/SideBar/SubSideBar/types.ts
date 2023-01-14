import type { ISubItem } from '../../../../../config/SideBarData/types';

export interface ISubSideBar {
  subData: ISubItem;
  onClick?: () => void;
  isActive?: boolean;
}
