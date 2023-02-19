import BurgerMenuButton from 'layouts/Mobile/MobilePageLayout/BurgerMenuButton/BurgerMenuButton';
import './MobilePageLayout.scss';

const MobilePageLayout = () => {
  return (
    <nav className='mobile-page'>
      <div className='mobile-page-head'>
        <BurgerMenuButton />
        <span className='mobile-page-head-title'> Sport News</span>
      </div>
    </nav>
  );
};

export default MobilePageLayout;
