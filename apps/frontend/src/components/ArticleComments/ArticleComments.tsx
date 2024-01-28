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
        <span className='article-comments-head-text'>Comments ({comments?.total || 0})</span>
        <Select
          defaultValue={commentsSortOptions[0].title}
          label='Sort by:'
          onChange={handleChangeSort}
          options={{ primaryKey: 'title', options: commentsSortOptions }}
          variant={SelectVariant.Text}
        />
      </div>
      {user && (
        <ArticleCommentsForm
          disabled={disabledForm}
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          user={user}
        />
      )}
      <div className='article-comments-contain'>
        {comments?.data.length ? (
          comments.data.map((comment) => {
            const date = convertDateISO(comment.createAt, 'mmm-d');
            return (
              <div className='article-comments-item' key={comment.id}>
                <div className='article-comments-item-user'>
                  <img alt='avatar' src={comment.user.avatar || userAvatar} />
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
      {comments?.total || 0 > 4 ? (
        <div className='article-comments-contain-show-more'>
          <Button
            className='article-comments-contain-show-more-btn'
            onClick={handleShowMore}
            variant={ButtonVariant.Text}
          >
            Show more
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default ArticleComments;
