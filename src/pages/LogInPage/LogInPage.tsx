import React from 'react';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

import './LogInPage.scss';

const LogInPage = () => {
  return (
    <div className='log-in'>
      <div className='log-in-left'>
        <Logo />
      </div>
      <div>
        <Button type='button'>Get Started</Button>
      </div>
    </div>
  );
};

export default LogInPage;
