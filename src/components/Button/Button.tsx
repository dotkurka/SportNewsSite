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
      className={`button button-${size} button-${buttonClass[variant]} ${className || ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
