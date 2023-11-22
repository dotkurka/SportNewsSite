import type { ButtonHTMLAttributes } from 'react';

export interface IPreviewButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  onClick?: () => void;
}
