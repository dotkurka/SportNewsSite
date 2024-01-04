import type { ICaregoryData } from 'features/category/types';
import type { PathMatch } from 'react-router-dom';

export interface INavBarManager {
  submitArticleRef: React.RefObject<HTMLButtonElement>;
  data?: ICaregoryData[];
}

export interface INavBarManagerButton {
  matchPath: PathMatch<string> | null;
  disabled: boolean;
  newArtcleOnClick: () => void;
  cancelOnClick: () => void;
  saveOnClick: () => void;
}
