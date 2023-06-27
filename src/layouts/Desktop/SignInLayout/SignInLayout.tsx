import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Logo } from 'components';
import { ButtonVariant } from 'components/Button/types';
import useMobileWidth from 'hooks/useWindowsWidth';
import { MobileLogInLayout } from 'layouts';
import { logIn } from 'utils/routesPath';

import './SignInLayout.scss';

const SignInLayout = () => {
  const navigate = useNavigate();

  const isMobile = useMobileWidth(1024);

  if (isMobile) {
    return <MobileLogInLayout />;
  }

  return (
    <div className='sign-up'>
      <div className='sign-up-left'>
        <Logo />
      </div>
      <div className='sign-up-right'>
        <div className='sign-up-right-header'>
          Already have an account?
          <Button onClick={() => navigate(logIn)} variant={ButtonVariant.Default}>
            Log in
          </Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SignInLayout;