import { Form, Formik } from 'formik';

import { Button, Input, TextLink } from '../../../components';
import { ButtonVariant } from '../../../components/Button/types';
import { TextLinkVariant } from '../../../components/TextLink/types';
import validationSchema from '../validationSchema';

import './ForgotPassword.scss';

interface IFormValues {
  email: string;
}

const ForgotPassword = () => {
  const initialValues: IFormValues = {
    email: '',
  };

  const submit = () => {};
  return (
    <Formik onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Forgot your password?</div>
          <div className='form-description'>
            Enter your email address below and we’ll get you back on track.
          </div>
          <div className='form-contain'>
            <Input
              className='form-input'
              placeholder='Email@gmail.com'
              label='Email address'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <Button
              className='form-button'
              variant={ButtonVariant.Contained}
              size='large'
              type='submit'
            >
              Request resent link
            </Button>
            <div className='form-text-link'>
              <TextLink className='form-text-link-content' variant={TextLinkVariant.Body1}>
                Back to Sign in
              </TextLink>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
