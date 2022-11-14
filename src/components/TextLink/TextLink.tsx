import type { ITextLink } from './types';

import './TextLink.scss';

const TextLink = ({ href, variant = 'body1', children, ...props }: ITextLink) => {
  return (
    <a {...props} className={`text-link text-link-${variant}`} href={href}>
      {children}
    </a>
  );
};

export default TextLink;
