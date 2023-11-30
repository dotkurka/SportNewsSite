import type { IArticleCreate } from 'features/newArticle/types';

export interface IInitValueForm {
  article: string;
}

export interface INewArticleForm {
  onSubmit: (value: IArticleCreate) => void;
  initialValues: IArticleCreate;
  submitAction: (action: 'submit' | 'preview') => void;
  submitRef?: React.RefObject<HTMLButtonElement>;
  reviewRef?: React.RefObject<HTMLButtonElement>;
}

export interface IImageFormik {
  formikSetValue: (field: string, value: string, shouldValidate?: boolean | undefined) => void;
  touched?: boolean;
  errors?: string;
  value: string;
  name: string;
}
