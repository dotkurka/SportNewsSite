import userAvatar from 'assets/images/profile-avatar.svg';
import { Button, Select } from 'components';
import ArticleCommentsForm from 'components/ArticleComments/ArticleCommentsForm';
import { ButtonVariant } from 'components/Button/enums';
import { SelectVariant } from 'components/Select/enums';
import { commentsSortOptions } from 'features/article/constants';
import { convertDateISO } from 'utils';

import type { IArticleComments } from 'components/ArticleComments/types';
import type { ICommentRequest } from 'features/article/types';

import './ArticleComments.scss';

const ArticleComments = ({
  comments,
  user,
  handleSubmit,
  handleChangeSort,
  disabledForm,
  handleShowMore,
  className = '',
}: IArticleComments) => {
  const initialValues: ICommentRequest = {
    comment: '',
  };

  return (
    <div className={`article-comments ${className}`}>
      <div className='article-comments-head'>
        <span className='article-comments-head-text'>Comments ({comments.length})</span>
        <Select
          label='Sort by:'
          onChange={handleChangeSort}
          variant={SelectVariant.Text}
          defaultValue={commentsSortOptions[0].title}
          options={{ primaryKey: 'title', options: commentsSortOptions }}
        />
      </div>
      {user && (
        <ArticleCommentsForm
          user={user}
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
          <Button
            onClick={handleShowMore}
            className='article-comments-contain-show-more-btn'
            variant={ButtonVariant.Text}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default ArticleComments;