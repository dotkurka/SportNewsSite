export interface ITextLink {
  children: string;
  href?: string;
  className?: string;
  disabled?: boolean;
  variant?: TextLinkVariant;
}

export enum TextLinkVariant {
  Body2 = 'body2',
  Default = 'body1',
}
