import { ButtonSize, ButtonVariant } from './types';

import type { IButton } from './types';

import './Button.scss';

const buttonClass = {
  [ButtonVariant.Text]: 'text',
  [ButtonVariant.Contained]: 'contained',
  [ButtonVariant.Default]: 'outline',
};

const buttonSize = {
  [ButtonSize.Large]: 'large',
  [ButtonSize.Medium]: 'medium',
};

const Button = ({
  children,
  variant = ButtonVariant.Default,
  type = 'button',
  size = ButtonSize.Medium,
  className,
  onClick,
  ...props
}: IButton) => {
  return (
    <button
      onClick={onClick}
      {...props}
      className={`button button-${buttonClass[variant]} ${buttonSize[size]} ${className || ''}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
