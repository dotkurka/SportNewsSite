import { Form, Formik } from 'formik';

import userAvatar from 'assets/images/profile-avatar.svg';
import { Button } from 'components';
import { commentSchema } from 'features/article/validationSchema';
import useAutosizeTextArea from 'hooks/useAutosizeTextArea';

import type { IArticleCommentsForm } from 'components/ArticleComments/types';

import './ArticleComments.scss';

const ArticleCommentsForm = ({
  handleSubmit,
  initialValues,
  disabled,
  user,
}: IArticleCommentsForm) => {
  const textAreaRef = useAutosizeTextArea();

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={(value, action) => {
        handleSubmit?.(value);
        action.resetForm();
      }}
      validationSchema={commentSchema}
    >
      {({ values, handleChange, isValid, dirty, handleBlur }) => (
        <Form>
          <div className='article-comments-form'>
            <img alt='avatar' src={user?.avatar || userAvatar} />
            <textarea
              className='article-comments-form-input'
              disabled={disabled}
              maxLength={750}
              name='comment'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='Write a comment'
              ref={textAreaRef}
              value={values.comment}
            />
            <Button
              className='article-comments-form-btn'
              disabled={!(isValid && dirty)}
              type='submit'
            >
              Send
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ArticleCommentsForm;
