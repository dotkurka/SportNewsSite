import { TextLinkVariant } from './types';

import type { ITextLink } from './types';

import './TextLink.scss';

const textLinkClass = {
  [TextLinkVariant.Body2]: 'body2',
  [TextLinkVariant.Default]: 'body1',
};

const TextLink = ({
  href,
  variant = TextLinkVariant.Default,
  className,
  children,
  ...props
}: ITextLink) => {
  return (
    <a
      {...props}
      className={`text-link text-link-${textLinkClass[variant]} ${className}`}
      href={href}
    >
      {children}
    </a>
  );
};

export default TextLink;
