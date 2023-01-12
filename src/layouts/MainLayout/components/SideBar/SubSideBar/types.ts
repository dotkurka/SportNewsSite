import type { ISidebarData } from '../../../../../config/SideBarData/types';

export interface ISubSideBar {
  subData: ISidebarData;
  onClick?: () => void;
}
