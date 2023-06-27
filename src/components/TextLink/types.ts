export interface ITextLink {
  children: string;
  to?: string;
  className?: string;
  disabled?: boolean;
  variant?: TextLinkVariant;
}

export enum TextLinkVariant {
  Body2 = 'body2',
  Default = 'body1',
}
