import type { InputVariant } from 'components/Input/enums';
import type { ComponentProps, ReactNode } from 'react';

export interface IInput extends ComponentProps<'input'> {
  type: string;
  errors?: string | boolean;
  touched?: boolean;
  disabledIcon?: boolean;
  label?: string;
  placeholder?: string;
  variant?: InputVariant;
  description?: ReactNode;
  className?: string;
  name?: string;
}
