import React, { FC } from 'react';

import './Button.scss';

interface IButton {
  children: string;
  variant?: string;
  type?: 'button' | 'submit';
}

const Button: FC<IButton> = ({ children, variant, type = 'button' }) => {
  return (
    <button className={`button ${variant}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
