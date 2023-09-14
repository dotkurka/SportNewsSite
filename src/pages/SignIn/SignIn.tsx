import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSignUpMutation } from 'api/authApi';
import { ReactComponent as FbIcon } from 'assets/images/facebook-circle-icon.svg';
import { ReactComponent as GmailIcon } from 'assets/images/gmail-circle-icon.svg';
import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/types';
import { signInValidation } from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';
import { setToken } from 'redux/authSlice';
import { logIn } from 'utils/routesPath';

import type { IRequestError, ISignUpRequest } from 'features/auth/types';

const initialValues: ISignUpRequest = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignIn = () => {
  const dispatch = useDispatch();
  const isMobile = useMobileWidth(1024);
  const [errorMessage, setErrorMessage] = useState('');

  const [signIn, { error: singInError, isError }] = useSignUpMutation();

  useEffect(() => {
    if (isError) {
      const error = (singInError as IRequestError).data.message;
      setErrorMessage(error);
    }
  }, [isError]);

  const submit = async (values: ISignUpRequest) => {
    const result = await signIn(values);
    if ('data' in result) {
      dispatch(setToken(result.data));
    }
  };

  return (
    <Formik validationSchema={signInValidation} onSubmit={submit} initialValues={initialValues}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Create Account</div>
          <div className='form-social'>
            <FbIcon className='form-social-icon' />
            <GmailIcon className='form-social-icon' />
          </div>
          <div className='form-description-sign'>Or use your email for registration:</div>

          {errors.password || errors.email ? (
            <div className='form-error'>Incorrect user ID or password. Try again</div>
          ) : (
            <div className='form-error'>{errorMessage}</div>
          )}

          <div className='form-contain'>
            <div className='form-dual'>
              <Input
                className='form-dual-input'
                placeholder='Jonh'
                label='First name'
                type='text'
                name='firstName'
                errors={errors.firstName}
                touched={touched.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <Input
                className='form-dual-input'
                placeholder='Doe'
                label='Last name'
                type='text'
                name='lastName'
                errors={errors.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                touched={touched.lastName}
              />
            </div>
            <Input
              className='form-input'
              placeholder='jonhdoe@gmail.com'
              label='Email'
              type='email'
              name='email'
              errors={errors.email}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              touched={touched.email}
            />
            <Input
              className='form-input'
              placeholder='9 + characters'
              label='Password'
              type='password'
              name='password'
              errors={errors.password}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              touched={touched.password}
            />
            <Button
              className='form-button'
              variant={ButtonVariant.Contained}
              size={ButtonSize.Large}
              type='submit'
            >
              Sign Up
            </Button>

            {isMobile && (
              <div className='form-mobile'>
                <TextLink className='form-mobile-link' to={logIn}>
                  Already have an account?
                </TextLink>
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
