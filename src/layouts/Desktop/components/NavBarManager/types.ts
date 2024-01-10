import type { ICaregoryData } from 'features/category/types';

export interface INavBarManager {
  submitArticleRef: React.RefObject<HTMLButtonElement>;
  data?: ICaregoryData[];
}

export interface INavBarManagerButton {
  matchPath: boolean;
  disabled: boolean;
  newArtcleOnClick: () => void;
  cancelOnClick: () => void;
  saveOnClick: () => void;
}
