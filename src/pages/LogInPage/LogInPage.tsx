import { Button, Logo } from '../../components';
import { ButtonVariant } from '../../components/Button/types';

import './LogInPage.scss';
import NewPassword from './NewPassword/NewPassword';

const LogInPage = () => {
  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div className='log-in-right'>
        <div className='log-in-right-header'>
          Don’t have an account?
          <Button variant={ButtonVariant.Outline}>Get Started</Button>
        </div>

        <NewPassword />
      </div>
    </div>
  );
};

export default LogInPage;
