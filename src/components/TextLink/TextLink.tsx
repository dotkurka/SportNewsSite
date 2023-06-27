import { Link } from 'react-router-dom';

import { TextLinkVariant } from './types';

import type { ITextLink } from './types';

import './TextLink.scss';

const textLinkClass = {
  [TextLinkVariant.Body2]: 'body2',
  [TextLinkVariant.Default]: 'body1',
};

const TextLink = ({
  to = '/',
  variant = TextLinkVariant.Default,
  className,
  children,
  ...props
}: ITextLink) => {
  return (
    <Link
      {...props}
      className={`text-link text-link-${textLinkClass[variant]} ${className}`}
      to={to}
    >
      {children}
    </Link>
  );
};

export default TextLink;
