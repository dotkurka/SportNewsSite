import { Link } from 'react-router-dom';

import './Logo.scss';
import { home } from 'constants/routesPath';

interface ILogo {
  className?: string;
}

const Logo = ({ className }: ILogo) => {
  return (
    <Link to={home} className={`logo ${className}`}>
      <span className='logo-text'>Sport News</span>
    </Link>
  );
};

export default Logo;
