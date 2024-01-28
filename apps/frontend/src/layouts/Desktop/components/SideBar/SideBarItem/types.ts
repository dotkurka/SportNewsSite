import type { ICaregoryData } from 'features/categories/types';

export interface ISideBarItem {
  item: ICaregoryData;
  onClick?: () => void;
  isActive: boolean;
}
