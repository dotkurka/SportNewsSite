import type { ISidebarData } from '../../../../../config/SideBarData/types';

export interface ISideBarItem {
  item: ISidebarData;
  onClick?: () => void;
  isActive: boolean;
}
