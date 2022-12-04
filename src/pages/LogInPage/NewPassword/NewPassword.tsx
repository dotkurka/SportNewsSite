import { Form, Formik } from 'formik';

import { Button, Input, TextLink } from '../../../components';
import { ButtonVariant } from '../../../components/Button/types';
import { TextLinkVariant } from '../../../components/TextLink/types';
import validationSchema from '../validationSchema';

import './NewPassword.scss';

interface IFormValues {
  password: string;
}

const NewPassword = () => {
  const initialValues: IFormValues = {
    password: '',
  };

  const submit = () => {};
  return (
    <Formik onSubmit={submit} initialValues={initialValues} validationSchema={validationSchema}>
      {({ values, handleChange, handleBlur, handleSubmit }) => (
        <Form className='form' onSubmit={handleSubmit}>
          <div className='form-title'>Please enter your new password.</div>

          <div className='form-contain'>
            <Input
              className='form-input'
              placeholder='new password'
              label='new password'
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Input
              className='form-input'
              placeholder='confirm password'
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
              size='large'
              type='submit'
            >
              set new password
            </Button>
            <div className='form-text-link'>
              <TextLink className='form-text-link-content' variant={TextLinkVariant.Body1}>
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
