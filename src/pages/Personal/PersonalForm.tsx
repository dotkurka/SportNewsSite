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
      validationSchema={updateUserSchema}
      onSubmit={handleSubmitForm}
      initialValues={personalInitialValue}
    >
      {({ values, errors, touched, dirty, handleChange, handleSubmit }) => {
        return (
          <Form className='personal-form' onSubmit={handleSubmit}>
            <AvatarUpload
              href={avatar}
              onChange={avatarOnChange}
              className='personal-form-avatar'
            />
            <Input
              succesDisabled
              placeholder={user.firstName}
              value={values.firstName}
              touched={touched.firstName}
              errors={errors.firstName}
              onChange={handleChange}
              className='personal-form-input'
              name='firstName'
              label='first name'
              type='text'
            />
            <Input
              succesDisabled
              placeholder={user.lastName}
              value={values.lastName}
              touched={touched.lastName}
              errors={errors.lastName}
              onChange={handleChange}
              className='personal-form-input'
              name='lastName'
              label='last name'
              type='text'
            />
            <Input
              succesDisabled
              placeholder={user.email}
              value={values.email}
              touched={touched.email}
              errors={errors.email}
              onChange={handleChange}
              className='personal-form-input'
              name='email'
              label='email'
              type='email'
            />
            <Button
              disabled={!dirty}
              type='submit'
              className='personal-form-btn'
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
