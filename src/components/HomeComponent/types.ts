import type { HomeResponseType } from 'features/home/types';

export interface IHomeComponent {
  data: HomeResponseType;
  className?: string;
  hidden?: boolean;
}
