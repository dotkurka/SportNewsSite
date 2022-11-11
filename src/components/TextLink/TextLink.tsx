import './TextLink.scss';

interface ITextLink {
  href?: string;
  children: string;
  disabled?: boolean;
  variant?: string;
}

const TextLink = ({ href, variant = 'body1', children, ...props }: ITextLink) => {
  return (
    <a {...props} className={`text-link text-link-${variant}`} href={href}>
      {children}
    </a>
  );
};

export default TextLink;
