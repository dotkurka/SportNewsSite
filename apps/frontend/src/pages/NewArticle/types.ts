import type { IArticleRequest } from 'features/article/types';
import type { ICaregoryData, IConferenceData, ITeamData } from 'features/categories/types';

export interface IArticleFormData
  extends Omit<IArticleRequest, 'conference' | 'team' | 'category'> {
  category: ICaregoryData;
  conference: IConferenceData;
  team: ITeamData;
}

export interface INewArticleForm {
  onSubmit: (value: IArticleFormData) => void;
  initialValues: IArticleFormData;
  submitAction: (action: 'submit' | 'preview') => void;
  submitRef?: React.RefObject<HTMLButtonElement> | null;
  previewRef?: React.RefObject<HTMLButtonElement>;
}
