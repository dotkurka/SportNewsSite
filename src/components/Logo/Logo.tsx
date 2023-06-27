import './Logo.scss';

interface ILogo {
  className?: string;
}

const Logo = ({ className }: ILogo) => {
  return (
    <div className={`logo ${className}`}>
      <span className='logo-text'>Sport News</span>
    </div>
  );
};

export default Logo;
