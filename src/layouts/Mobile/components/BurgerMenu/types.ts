import type { ISidebarData } from 'config/SideBarData/types';

export interface IBurger {
  data: ISidebarData[] | undefined;
  show: boolean;
}

export interface IBurgerItem {
  item: ISidebarData;
  onClick: () => void;
}

export interface ISecondMenu {
  secondData: ISidebarData[] | undefined;
  title: string | null;
  check: string | null;
  showDrop: (item: string) => void;
  close: () => void;
  className?: string;
}

export interface ISecondItem {
  secondData: ISidebarData;
  showDrop: (item: string) => void;
  check: string | null;
}
