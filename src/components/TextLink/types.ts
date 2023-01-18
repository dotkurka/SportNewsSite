export interface ITextLink {
  children: string;
  href?: string;
  className?: string;
  disabled?: boolean;
  variant?: TextLinkVariant;
}

export enum TextLinkVariant {
  Body1 = 'body1',
  Body2 = 'body2',
  Default = 'default',
}
