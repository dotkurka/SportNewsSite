import { Outlet } from 'react-router-dom';

import { Logo } from 'components';

import './MobileLogInLayout.scss';

const MobileLogInLayout = () => {
  return (
    <div className='login-layout'>
      <Logo className='login-layout-logo' />
      <div className='login-layout-contain'>
        <div className='login-layout-form'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MobileLogInLayout;
