import type { ICaregoryData } from 'features/category/types';

export interface ISideBarItem {
  item: ICaregoryData;
  onClick?: () => void;
  isActive: boolean;
}
