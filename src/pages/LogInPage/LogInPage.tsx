import { Form, Formik } from 'formik';

import { Button, Input, Logo, TextLink } from '../../components';
import { ButtonVariant } from '../../components/Button/types';
import { InputVariant } from '../../components/Input/types';
import { TextLinkVariant } from '../../components/TextLink/types';

import validationSchema from './validationSchema';

import './LogInPage.scss';

interface IFormValues {
  email: string;
  password: string;
}

const LogInPage = () => {
  const initialValues: IFormValues = {
    email: '',
    password: '',
  };

  const submit = () => {};

  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div className='log-in-right'>
        <div className='log-in-right-header'>
          Don’t have an account?
          <Button variant={ButtonVariant.Outline}>Get Started</Button>
        </div>

        <Formik onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
            <Form className='form-contain' onSubmit={handleSubmit}>
              <div className='form-title'>Log in to Sport News</div>
              {errors.email && errors.password && touched.email && errors.password ? (
                <div className='form-error'>{errors.email && errors.password}</div>
              ) : null}
              <div>
                <Input
                  className='form-input'
                  placeholder='Email@gmail.com'
                  label='Email address'
                  variant={errors.email ? InputVariant.Error : InputVariant.Succes}
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <Input
                  className='form-input'
                  placeholder='Email@gmail.com'
                  label='Email address'
                  variant={errors.password ? InputVariant.Error : InputVariant.Succes}
                  type='password'
                  name='password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  description={
                    <TextLink variant={TextLinkVariant.Body2}>Forgot password?</TextLink>
                  }
                />
              </div>
              <Button
                className='form-button'
                variant={ButtonVariant.Contained}
                size='large'
                type='submit'
              >
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LogInPage;
