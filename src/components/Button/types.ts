import type { ButtonSize, ButtonVariant } from 'components/Button/enums';
import type { ComponentProps, ReactNode } from 'react';

export interface IButton extends ComponentProps<'button'> {
  children: string | ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit';
  onClick?: () => void;
}
