import { ButtonVariant } from './types';

import type { IButton } from './types';

import './Button.scss';

const Button = ({
  children,
  variant = ButtonVariant.Outline,
  type = 'button',
  size,
  className,
  ...props
}: IButton) => {
  const buttonClass = {
    [ButtonVariant.Outline]: 'outline',
    [ButtonVariant.Contained]: 'contained',
    [ButtonVariant.Default]: '',
  };

  return (
    <button
      {...props}
      className={`button button-${buttonClass[variant]} ${size ? 'large' : ''} ${className || ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
