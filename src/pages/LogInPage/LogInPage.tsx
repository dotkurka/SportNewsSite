import { Button, Logo, TextLink } from '../../components';

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
      </div>
    </div>
  );
};

export default LogInPage;
