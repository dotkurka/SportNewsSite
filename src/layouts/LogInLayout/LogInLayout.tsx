import { Button, Logo } from '../../components';
import { ButtonVariant } from '../../components/Button/types';

import type { ReactNode } from 'react';

import './LogInLayout.scss';

interface ILogin {
  children: ReactNode | undefined;
}

const LogInLayout = ({ children }: ILogin) => {
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

        {children}
      </div>
    </div>
  );
};

export default LogInLayout;
