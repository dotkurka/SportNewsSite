import { Button, Input, Logo, TextLink } from '../../components';

import './LogInPage.scss';

const LogInPage = () => {
  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div className='log-in-right'>
        <Button variant='contained' size='large' type='button'>
          Sign up
        </Button>
        <TextLink variant='body1'>Select your teams</TextLink>
        <div>
          <Input
            type='text'
            label='Email'
            placeholder='jdhfjsdhfjhsd@gmail.com'
            validation='error'
          />
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
