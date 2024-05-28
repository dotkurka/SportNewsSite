import { Link } from 'react-router-dom';

import './Logo.scss';
import { home } from 'constants/routesPath';

interface ILogo {
  className?: string;
}

const Logo = ({ className }: ILogo) => {
  return (
    <Link className={`logo ${className}`} to={home}>
      <span className='logo-text'>Sport News</span>
    </Link>
  );
};

export default Logo;
