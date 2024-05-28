import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useLogInMutation } from 'api/authApi';
import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/enums';
import { TextLinkVariant } from 'components/TextLink/enums';
import { signIn } from 'constants/routesPath';
import { logInValidation } from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';
import { setToken } from 'redux/authSlice';

import type { ILoginRequest, IRequestError } from 'features/auth/types';

import 'features/auth/style.scss';

const initialValues: ILoginRequest = {
  email: '',
  password: '',
};

const LogIn = () => {
  const dispatch = useDispatch();
  const isMobile = useMobileWidth(1024);

  const [errorMessage, setErrorMessage] = useState('');
  const [logIn, { error: logInError, isError }] = useLogInMutation();

  useEffect(() => {
    if (isError) {
      const error = (logInError as IRequestError).data.message;
      setErrorMessage(error);
    }
  }, [isError]);

  const submit = async (values: ILoginRequest) => {
    const result = await logIn(values).unwrap();
    if (result) {
      dispatch(setToken(result));
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submit} validationSchema={logInValidation}>
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
              errors={errors.email}
              label='Email address'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='Email@gmail.com'
              touched={touched.email}
              type='email'
              value={values.email}
            />

            <Input
              className='form-input'
              description={
                <TextLink
                  className='form-input-description'
                  to='forgot-password'
                  variant={TextLinkVariant.Body2}
                >
                  Forgot password?
                </TextLink>
              }
              errors={errors.password}
              label='Password'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='Enter your password'
              touched={touched.password}
              type='password'
              value={values.password}
            />
            <Button
              className='form-button'
              size={ButtonSize.Large}
              type='submit'
              variant={ButtonVariant.Contained}
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
