import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Logo } from 'components';
import { ButtonVariant } from 'components/Button/types';
import useMobileWidth from 'hooks/useWindowsWidth';
import MobileLogInLayout from 'layouts/Mobile/MobileLogInLayout/MobileLogInLayout';

import './LogInLayout.scss';

const LogInLayout = () => {
  const navigate = useNavigate();

  const isMobile = useMobileWidth(1023);

  if (isMobile) {
    return <MobileLogInLayout />;
  }

  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div className='log-in-right'>
        <div className='log-in-right-header'>
          Don&#39;t have an account?
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