import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { useSignUpMutation } from 'api/authApi';
import { ReactComponent as FbIcon } from 'assets/images/facebook-circle-icon.svg';
import { ReactComponent as GmailIcon } from 'assets/images/gmail-circle-icon.svg';
import { Button, Input } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/types';
import { setCredentials } from 'redux/authSlice';

import type { ISignUpRequest } from 'features/auth/types';

const initialValues: ISignUpRequest = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const SignIn = () => {
  const dispatch = useDispatch();

  const [signUp] = useSignUpMutation();

  const submit = async (values: ISignUpRequest) => {
    try {
      const result = await signUp(values);
      if ('data' in result) {
        dispatch(setCredentials(result.data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik onSubmit={submit} initialValues={initialValues}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Create Account</div>

          <div className='form-social'>
            <FbIcon className='form-social-icon' />
            <GmailIcon className='form-social-icon' />
          </div>

          <div className='form-description-sign'>Or use your email for registration:</div>

          <div className='form-contain'>
            <div className='form-dual'>
              <Input
                className='form-dual-input'
                placeholder='Jonh'
                label='First name'
                type='text'
                name='firstName'
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
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </div>

            <Input
              className='form-input'
              placeholder='jonhdoe@gmail.com'
              label='Email'
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />

            <Input
              className='form-input'
              placeholder='4 + characters'
              label='Password'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Button
              className='form-button'
              variant={ButtonVariant.Contained}
              size={ButtonSize.Large}
              type='submit'
            >
              Sign Up
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
