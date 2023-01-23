import { Form, Formik } from 'formik';

import { Button, Input, TextLink } from 'components';
import { ButtonSize, ButtonVariant } from 'components/Button/types';
import { TextLinkVariant } from 'components/TextLink/types';
import validationSchema from 'features/auth/validationSchema';

import type { IFormValues } from 'features/auth/types';

const initialValues: IFormValues = {
  password: '',
  confirmPassword: '',
};

const submit = () => {}; // TODO

const NewPassword = () => {
  return (
    <Formik onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
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
