import type { IUser } from 'features/auth/types';
import type { IComment, ICommentRequest } from 'features/newArticle/types';

export interface IArticleComments {
  comments: IComment[];
  user: IUser;
  handleSubmit: (value: ICommentRequest) => void;
  handleChangeSort: (value: string) => void;
  selectData: {
    defaultValue: string;
    options: string[];
  };
  className?: string;
  disabledForm?: boolean;
}

export interface IArticleCommentsForm {
  handleSubmit: (value: ICommentRequest) => void;
  initialValues: ICommentRequest;
  disabled?: boolean;
}
