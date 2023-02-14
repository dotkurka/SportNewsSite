import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Logo } from 'components';
import { ButtonVariant } from 'components/Button/types';

import './LogInLayout.scss';

const LogInLayout = () => {
  const navigate = useNavigate();

  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div className='log-in-right'>
        <div className='log-in-right-header'>
          Don’t have an account?
          <Button onClick={() => navigate('/singin')} variant={ButtonVariant.Default}>
            Get Started
          </Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default LogInLayout;
