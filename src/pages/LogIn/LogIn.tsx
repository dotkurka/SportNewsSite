import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useLogInMutation } from 'api/authApi';
import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/types';
import { TextLinkVariant } from 'components/TextLink/types';
import { logInValidation } from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';
import { setToken } from 'redux/authSlice';
import { signIn } from 'utils/routesPath';

import type { ILoginRequest } from 'features/auth/types';

import 'features/auth/style.scss';

const initialValues: ILoginRequest = {
  email: '',
  password: '',
};

interface IError {
  data: {
    title: string;
  };
}

const LogIn = () => {
  const dispatch = useDispatch();
  const isMobile = useMobileWidth(1024);

  const [errorMessage, setErrorMessage] = useState('');
  const [logIn, { error: logInError, isError }] = useLogInMutation();

  useEffect(() => {
    if (isError) {
      const error = (logInError as IError).data.title;
      setErrorMessage(error);
    }
  }, [isError]);

  const submit = async (values: ILoginRequest) => {
    const result = await logIn(values);
    if ('data' in result) {
      dispatch(setToken(result.data));
    }
  };

  return (
    <Formik onSubmit={submit} initialValues={initialValues} validationSchema={logInValidation}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Log in to Sport News</div>
          {errorMessage && (
            <div className='form-description'>Sign in with your organizational account</div>
          )}

          {errors.password || errors.email ? (
            <div className='form-error'>Incorrect user ID or password. Try again</div>
          ) : (
            <div className='form-error'>{errorMessage}</div>
          )}

          <div className='form-contain'>
            <Input
              className='form-input'
              placeholder='Email@gmail.com'
              label='Email address'
              type='email'
              name='email'
              touched={touched.email}
              errors={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <Input
              className='form-input'
              placeholder='Enter your password'
              label='Password'
              type='password'
              name='password'
              errors={errors.password}
              touched={touched.password}
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
                <TextLink className='form-mobile-link' to={signIn}>
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
