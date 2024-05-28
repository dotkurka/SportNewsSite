import type { TextLinkVariant } from 'components/TextLink/enums';

export interface ITextLink {
  children: string;
  to?: string;
  className?: string;
  disabled?: boolean;
  variant?: TextLinkVariant;
}
