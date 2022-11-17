export interface IButton {
  children: string;
  variant?: ButtonVariant;
  size?: 'large';
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export enum ButtonVariant {
  Outline = 'outline',
  Contained = 'contained',
  Default = 'default',
}
