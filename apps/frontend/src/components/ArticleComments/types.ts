import type {
  ICommentResponse,
  ICommentRequest,
  ISortOption,
  IPaginationResponse,
} from 'features/article/types';
import type { IUser } from 'features/user/types';

export interface IArticleComments {
  comments?: IPaginationResponse<ICommentResponse>;
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
