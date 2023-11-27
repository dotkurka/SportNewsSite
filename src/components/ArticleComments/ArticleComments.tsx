import userAvatar from 'assets/images/profile-avatar.svg';
import { Button, Select } from 'components';
import ArticleCommentsForm from 'components/ArticleComments/ArticleCommentsForm';
import { ButtonVariant } from 'components/Button/types';
import { SelectVariant } from 'components/Select/types';
import { convertDateISO } from 'utils';

import type { IArticleComments } from 'components/ArticleComments/types';
import type { ICommentRequest } from 'features/newArticle/types';

import './ArticleComments.scss';

const ArticleComments = ({
  comments,
  user,
  handleSubmit,
  handleChangeSort,
  selectData,
  disabledForm,
  className = '',
}: IArticleComments) => {
  const initialValues: ICommentRequest = {
    user,
    comment: '',
  };

  return (
    <div className={`article-comments ${className}`}>
      <div className='article-comments-head'>
        <span className='article-comments-head-text'>Comments ({comments.length})</span>
        <Select
          onChange={handleChangeSort}
          label='Sort by:'
          variant={SelectVariant.Text}
          defaultValue={selectData.defaultValue}
          options={selectData.options}
        />
      </div>
      {user && (
        <ArticleCommentsForm
          disabled={disabledForm}
          handleSubmit={handleSubmit}
          initialValues={initialValues}
        />
      )}
      <div className='article-comments-contain'>
        {comments.length ? (
          comments.map((comment) => {
            const date = convertDateISO(comment.createAt, 'mmm-d');
            return (
              <div key={comment.id} className='article-comments-item'>
                <div className='article-comments-item-user'>
                  <img src={comment.user.avatar || userAvatar} alt='avatar' />
                  <div className='article-comments-item-user-card'>
                    <h3>
                      {comment.user.firstName} {comment.user.lastName}
                    </h3>
                    <span>{date}</span>
                  </div>
                </div>
                <p className='article-comments-item-text'>{comment.comment}</p>
              </div>
            );
          })
        ) : (
          <p className='article-comments-contain-empty'>There are no comments yet</p>
        )}
      </div>
      {comments.length > 4 && (
        <div className='article-comments-contain-show-more'>
          <Button className='article-comments-contain-show-more-btn' variant={ButtonVariant.Text}>
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticleComments;
