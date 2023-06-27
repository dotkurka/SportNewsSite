import { Form, Formik } from 'formik';

import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/types';
import { TextLinkVariant } from 'components/TextLink/types';
import validationSchema from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';

import type { IFormValues } from 'features/auth/types';

import 'features/auth/style.scss';

const initialValues: IFormValues = {
  email: '',
  password: '',
};

const submit = () => {}; // TODO

const LogIn = () => {
  const isMobile = useMobileWidth(1023);

  return (
    <Formik onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Log in to Sport News</div>

          {errors.password || errors.email ? (
            <>
              <div className='form-description'>Sign in with your organizational account</div>
              <div className='form-error'>Incorrect user ID or password. Try again</div>
            </>
          ) : null}

          <div className='form-contain'>
            <Input
              className='form-input'
              placeholder='Email@gmail.com'
              label='Email address'
              errors={errors.email}
              touched={touched.email}
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <Input
              className='form-input'
              placeholder='Enter your password'
              label='Password'
              errors={errors.password}
              touched={touched.password}
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              description={
                <TextLink
                  className='form-input-description'
                  to='forgot-password'
                  variant={TextLinkVariant.Body2}
                >
                  Forgot password?
                </TextLink>
              }
            />
            <Button
              className='form-button'
              variant={ButtonVariant.Contained}
              size={ButtonSize.Large}
              type='submit'
            >
              Log In
            </Button>

            {isMobile && (
              <div className='form-mobile'>
                <TextLink className='form-mobile-link' to='/singin'>
                  Don&#39;t have an account?
                </TextLink>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LogIn;
