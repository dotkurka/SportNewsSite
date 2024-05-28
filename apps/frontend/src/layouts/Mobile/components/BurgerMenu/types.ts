import type { ICaregoryData, IConferenceData } from 'features/categories/types';

export interface IBurger {
  data?: ICaregoryData[];
  handleShow: (item: boolean) => void;
}

export interface IBurgerItem {
  item: ICaregoryData;
  onClick: () => void;
}

export interface ISecondMenu {
  secondData: IConferenceData[] | null;
  title: string | null;
  check: string | null;
  onClick: (item: string) => void;
  close: () => void;
  className?: string;
}

export interface ISecondItem {
  secondData: IConferenceData;
  showDrop: (item: string) => void;
  check: string | null;
}

export type BurgerContextType = () => void;
