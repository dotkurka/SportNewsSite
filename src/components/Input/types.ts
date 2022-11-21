import type { ReactNode } from 'react';

export interface IInput {
  type: string;
  label?: string;
  placeholder?: string;
  variant?: InputVariant;
  description?: ReactNode;
}

export enum InputVariant {
  Succes = 'succes',
  Error = 'error',
  Default = 'default',
}
