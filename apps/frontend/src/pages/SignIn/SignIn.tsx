import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useSignUpMutation } from 'api/authApi';
import { ReactComponent as FbIcon } from 'assets/images/facebook-circle-icon.svg';
import { ReactComponent as GmailIcon } from 'assets/images/gmail-circle-icon.svg';
import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/enums';
import { logIn } from 'constants/routesPath';
import { signInValidation } from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';
import { setToken } from 'redux/authSlice';

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
    const result = await signIn(values).unwrap();
    if (result) {
      dispatch(setToken(result));
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submit} validationSchema={signInValidation}>
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
                errors={errors.firstName}
                label='First name'
                name='firstName'
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Jonh'
                touched={touched.firstName}
                type='text'
                value={values.firstName}
              />
              <Input
                className='form-dual-input'
                errors={errors.lastName}
                label='Last name'
                name='lastName'
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder='Doe'
                touched={touched.lastName}
                type='text'
                value={values.lastName}
              />
            </div>
            <Input
              className='form-input'
              errors={errors.email}
              label='Email'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='jonhdoe@gmail.com'
              touched={touched.email}
              type='email'
              value={values.email}
            />
            <Input
              className='form-input'
              errors={errors.password}
              label='Password'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='9 + characters'
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
