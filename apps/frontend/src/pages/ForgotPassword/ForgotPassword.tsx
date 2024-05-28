import { Form, Formik } from 'formik';

import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/enums';
import { TextLinkVariant } from 'components/TextLink/enums';
import { logIn, signIn } from 'constants/routesPath';
import { forgotPasswordValidation } from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';

import 'features/auth/style.scss';

const initialValues = {
  email: '',
};

const submit = () => {
  'submit';
}; // TODO

const ForgotPassword = () => {
  const isMobile = useMobileWidth(1024);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={forgotPasswordValidation}
    >
      {({ values, handleChange, touched, errors, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title-forgot'>Forgot your password?</div>
          <div className='form-description-forgot'>
            Enter your email address below and we’ll get you back on track.
          </div>
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

            <Button
              className='form-button'
              size={ButtonSize.Large}
              type='submit'
              variant={ButtonVariant.Contained}
            >
              Request resent link
            </Button>

            {isMobile && (
              <div className='form-mobile'>
                <TextLink className='form-mobile-link' to={signIn}>
                  Don&#39;t have an account?
                </TextLink>
              </div>
            )}

            <div className='form-text-link'>
              <TextLink
                className='form-text-link-content'
                to={logIn}
                variant={TextLinkVariant.Default}
              >
                Back to Log in
              </TextLink>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ForgotPassword;
