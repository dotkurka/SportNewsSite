import type { IButton } from './types';

import './Button.scss';

const Button = ({ children, variant = 'outline', type = 'button', size, ...props }: IButton) => {
  return (
    <button {...props} className={`button button-${size} button-${variant} `} type={type}>
      {children}
    </button>
  );
};

export default Button;
