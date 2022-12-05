import { Form, Formik } from 'formik';

import { ReactComponent as FbIcon } from '../../assets/images/facebook-circle-icon.svg';
import { ReactComponent as GmailIcon } from '../../assets/images/gmail-circle-icon.svg';
import { Button, Input, Logo } from '../../components';
import { ButtonVariant } from '../../components/Button/types';

import './SingIn.scss';

interface IFormValues {
  fname: string;
  lname: string;
  email: string;
  password: string;
}

const SingIn = () => {
  const initialValues: IFormValues = {
    fname: '',
    lname: '',
    email: '',
    password: '',
  };

  const submit = () => {};
  return (
    <div className='sing-up'>
      <div className='sing-up-left'>
        <Logo />
      </div>
      <div className='sing-up-right'>
        <div className='sing-up-right-header'>
          Already have an account?
          <Button variant={ButtonVariant.Outline}>Log in</Button>
        </div>

        <Formik onSubmit={submit} initialValues={initialValues}>
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <Form className='form-contain' onSubmit={handleSubmit}>
              <div className='form-title'>Create Account</div>

              <div className='form-social'>
                <FbIcon className='form-social-icon' />
                <GmailIcon className='form-social-icon' />
              </div>

              <div className='form-description'>Or use your email for registration:</div>

              <div>
                <div className='form-dual'>
                  <Input
                    className='form-dual-input'
                    placeholder='Jonh'
                    label='First name'
                    type='text'
                    name='fname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.fname}
                  />
                  <Input
                    className='form-dual-input'
                    placeholder='Doe'
                    label='Last name'
                    type='text'
                    name='lname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lname}
                  />
                </div>

                <Input
                  className='form-input'
                  placeholder='jonhdoe@gmail.com'
                  label='Email'
                  type='email'
                  name='email'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />

                <Input
                  className='form-input'
                  placeholder='4 + characters'
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
                  Sing Up
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SingIn;
