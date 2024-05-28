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

const PasswordForm = ({ handleSubmitForm }: IPasswordForm<IPasswordUpdate>) => {
  return (
    <Formik
      initialValues={passwordInitialValue}
      onSubmit={handleSubmitForm}
      validationSchema={updatePasswordSchema}
    >
      {({ values, errors, touched, dirty, handleBlur, handleChange, handleSubmit }) => (
        <Form className='personal-form' onSubmit={handleSubmit}>
          <Input
            className='personal-form-input'
            errors={errors.password}
            label='Old password'
            name='password'
            onChange={handleChange}
            touched={touched.password}
            type='password'
            value={values.password}
          />
          <Input
            className='personal-form-input'
            errors={errors.newPassword}
            label='New password'
            name='newPassword'
            onBlur={handleBlur}
            onChange={handleChange}
            showPassword
            touched={touched.newPassword}
            type='password'
            value={values.newPassword}
          />
          <Button
            className='personal-form-btn'
            disabled={!dirty}
            type='submit'
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
