import { Form, Formik } from 'formik';

import { AvatarUpload, Button, Input } from 'components';
import { ButtonVariant } from 'components/Button/enums';
import { updateUserSchema } from 'features/user/validationShema';

import type { IUserUpdate } from 'features/user/types';
import type { IPersonalForm } from 'pages/Personal/types';

import './Personal.scss';

const personalInitialValue: IUserUpdate = {
  firstName: '',
  lastName: '',
  email: '',
};

const PersonalForm = ({ handleSubmitForm, avatar, avatarOnChange, user }: IPersonalForm) => {
  return (
    <Formik
      initialValues={personalInitialValue}
      onSubmit={handleSubmitForm}
      validationSchema={updateUserSchema}
    >
      {({ values, errors, touched, dirty, handleChange, handleSubmit }) => {
        return (
          <Form className='personal-form' onSubmit={handleSubmit}>
            <AvatarUpload
              className='personal-form-avatar'
              href={avatar}
              onChange={avatarOnChange}
            />
            <Input
              className='personal-form-input'
              errors={errors.firstName}
              label='first name'
              name='firstName'
              onChange={handleChange}
              placeholder={user.firstName}
              succesDisabled
              touched={touched.firstName}
              type='text'
              value={values.firstName}
            />
            <Input
              className='personal-form-input'
              errors={errors.lastName}
              label='last name'
              name='lastName'
              onChange={handleChange}
              placeholder={user.lastName}
              succesDisabled
              touched={touched.lastName}
              type='text'
              value={values.lastName}
            />
            <Input
              className='personal-form-input'
              errors={errors.email}
              label='email'
              name='email'
              onChange={handleChange}
              placeholder={user.email}
              succesDisabled
              touched={touched.email}
              type='email'
              value={values.email}
            />
            <Button
              className='personal-form-btn'
              disabled={!dirty}
              type='submit'
              variant={ButtonVariant.Contained}
            >
              Update profile
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalForm;
