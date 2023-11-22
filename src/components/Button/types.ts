import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  type?: 'button' | 'submit';
  onClick?: () => void;
}

export enum ButtonVariant {
  Text = 'text',
  Contained = 'contained',
  Default = 'default',
}

export enum ButtonSize {
  Large = 'large',
  Medium = 'medium',
}
