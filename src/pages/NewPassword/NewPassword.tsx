import { Form, Formik } from 'formik';

import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/enums';
import { TextLinkVariant } from 'components/TextLink/enums';
import { signIn } from 'constants/routesPath';
import { newPasswordValidation } from 'features/auth/validationSchema';
import useMobileWidth from 'hooks/useWindowsWidth';

const initialValues = {
  password: '',
  confirmPassword: '',
};

const submit = () => {}; // TODO

const NewPassword = () => {
  const isMobile = useMobileWidth(1024);

  return (
    <Formik
      onSubmit={submit}
      initialValues={initialValues}
      validationSchema={newPasswordValidation}
    >
      {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
        // TODO add green string 'Your password has been updated.'
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Please enter your new password.</div>

          <div className='form-contain'>
            <Input
              className='form-input'
              placeholder='new password'
              label='new password'
              type='password'
              name='password'
              errors={errors.password}
              touched={touched.password}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Input
              className='form-input'
              placeholder='confirm password'
              label='Password'
              type='password'
              name='confirmPassword'
              errors={errors.confirmPassword}
              touched={touched.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />

            <Button
              className='form-button'
              variant={ButtonVariant.Contained}
              size={ButtonSize.Large}
              type='submit'
            >
              set new password
            </Button>

            {isMobile && (
              <div className='form-mobile'>
                <TextLink className='form-mobile-link' to={signIn}>
                  Don&#39;t have an account?
                </TextLink>
              </div>
            )}

            <div className='form-text-link'>
              <TextLink className='form-text-link-content' variant={TextLinkVariant.Default}>
                Back to Sign in
              </TextLink>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default NewPassword;
