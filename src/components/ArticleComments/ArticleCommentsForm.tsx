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
      validationSchema={commentSchema}
      onSubmit={(value, action) => {
        handleSubmit?.(value);
        action.resetForm();
      }}
    >
      {({ values, handleChange, isValid, dirty, handleBlur }) => (
        <Form>
          <div className='article-comments-form'>
            <img src={user?.avatar || userAvatar} alt='avatar' />
            <textarea
              disabled={disabled}
              onBlur={handleBlur}
              placeholder='Write a comment'
              ref={textAreaRef}
              className='article-comments-form-input'
              name='comment'
              onChange={handleChange}
              value={values.comment}
              maxLength={750}
            />
            <Button
              disabled={!(isValid && dirty)}
              className='article-comments-form-btn'
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
