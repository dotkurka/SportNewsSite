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

const submit = () => {
  'submit';
}; // TODO add submit logic

const NewPassword = () => {
  const isMobile = useMobileWidth(1024);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={newPasswordValidation}
    >
      {({ values, handleChange, errors, touched, handleBlur, handleSubmit }) => (
        // TODO add green string 'Your password has been updated.'
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Please enter your new password.</div>

          <div className='form-contain'>
            <Input
              className='form-input'
              errors={errors.password}
              label='new password'
              name='password'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='new password'
              touched={touched.password}
              type='password'
              value={values.password}
            />
            <Input
              className='form-input'
              errors={errors.confirmPassword}
              label='Password'
              name='confirmPassword'
              onBlur={handleBlur}
              onChange={handleChange}
              placeholder='confirm password'
              touched={touched.confirmPassword}
              type='password'
              value={values.confirmPassword}
            />

            <Button
              className='form-button'
              size={ButtonSize.Large}
              type='submit'
              variant={ButtonVariant.Contained}
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
