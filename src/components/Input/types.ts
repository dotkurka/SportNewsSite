import type { ReactNode } from 'react';
import type React from 'react';

export interface IInput extends React.HTMLProps<HTMLInputElement> {
  type: string;
  errors?: string;
  touched?: boolean;
  disabledIcon?: boolean;
  label?: string;
  placeholder?: string;
  variant?: InputVariant;
  description?: ReactNode;
  className?: string;
  name?: string;
}

export enum InputVariant {
  Succes = 'succes',
  Error = 'error',
  Default = 'default',
}
