import { Button, Logo } from 'components';
import { ButtonVariant } from 'components/Button/types';

import type { ReactNode } from 'react';

import './SingInLayout.scss';

interface ISingLayout {
  children: ReactNode | undefined;
}

const SingInLayout = ({ children }: ISingLayout) => {
  return (
    <div className='sing-up'>
      <div className='sing-up-left'>
        <Logo />
      </div>
      <div className='sing-up-right'>
        <div className='sing-up-right-header'>
          Already have an account?
          <Button variant={ButtonVariant.Default}>Log in</Button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SingInLayout;
