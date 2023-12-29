import type { ICommentResponse, ICommentRequest, ISortOption } from 'features/article/types';
import type { IUser } from 'features/auth/types';

export interface IArticleComments {
  comments: ICommentResponse[];
  user?: IUser;

  handleSubmit?: (value: ICommentRequest) => void;
  handleChangeSort?: (value: ISortOption) => void;
  className?: string;
  disabledForm?: boolean;
  handleShowMore?: () => void;
}

export interface IArticleCommentsForm {
  user: IUser;
  handleSubmit?: (value: ICommentRequest) => void;
  initialValues: ICommentRequest;
  disabled?: boolean;
}
