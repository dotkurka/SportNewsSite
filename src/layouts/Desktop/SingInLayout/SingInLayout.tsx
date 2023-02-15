import { Outlet, useNavigate } from 'react-router-dom';

import { Button, Logo } from 'components';
import { ButtonVariant } from 'components/Button/types';

import './SingInLayout.scss';

const SingInLayout = () => {
  const navigate = useNavigate();

  return (
    <div className='sing-up'>
      <div className='sing-up-left'>
        <Logo />
      </div>
      <div className='sing-up-right'>
        <div className='sing-up-right-header'>
          Already have an account?
          <Button onClick={() => navigate('/login')} variant={ButtonVariant.Default}>
            Log in
          </Button>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SingInLayout;
