import { Form, Formik } from 'formik';

import { Button, Input } from 'components';
import { ButtonVariant } from 'components/Button/enums';
import { updatePasswordSchema } from 'features/user/validationShema';

import type { IPasswordUpdate } from 'features/user/types';
import type { IPasswordForm } from 'pages/Personal/types';

import './Personal.scss';

const passwordInitialValue: IPasswordUpdate = {
  password: '',
  newPassword: '',
};

const PasswordForm = ({ handleSubmitForm }: IPasswordForm) => {
  return (
    <Formik
      validationSchema={updatePasswordSchema}
      initialValues={passwordInitialValue}
      onSubmit={handleSubmitForm}
    >
      {({ values, errors, touched, dirty, handleBlur, handleChange, handleSubmit }) => (
        <Form className='personal-form' onSubmit={handleSubmit}>
          <Input
            value={values.password}
            touched={touched.password}
            errors={errors.password}
            onChange={handleChange}
            className='personal-form-input'
            name='password'
            label='Old password'
            type='password'
          />
          <Input
            showPassword
            onBlur={handleBlur}
            value={values.newPassword}
            touched={touched.newPassword}
            errors={errors.newPassword}
            onChange={handleChange}
            className='personal-form-input'
            name='newPassword'
            label='New password'
            type='password'
          />
          <Button
            disabled={!dirty}
            type='submit'
            className='personal-form-btn'
            variant={ButtonVariant.Contained}
          >
            Change password
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default PasswordForm;
