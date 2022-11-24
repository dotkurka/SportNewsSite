import type { ReactNode } from 'react';
import type React from 'react';

interface IInput {
  type: string;
  label?: string;
  placeholder?: string;
  variant?: InputVariant;
  description?: ReactNode;
  className?: string;
}

export enum InputVariant {
  Succes = 'succes',
  Error = 'error',
  Default = 'default',
}

export type TInput = IInput & React.HTMLProps<HTMLInputElement>;
