import { TextLinkVariant } from './types';

import type { ITextLink } from './types';

import './TextLink.scss';

const TextLink = ({
  href,
  variant = TextLinkVariant.Default,
  className,
  children,
  ...props
}: ITextLink) => {
  const textLinkClass = {
    [TextLinkVariant.Body1]: 'body1',
    [TextLinkVariant.Body2]: 'body2',
    [TextLinkVariant.Default]: 'body1',
  };
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
