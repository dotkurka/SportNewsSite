import SecondMenuItem from 'layouts/Mobile/components/BurgerMenu/SecondMenuItem';

import type { ISecondMenu } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

const SecondMenu = ({ secondData, title, onClick, check, close, className }: ISecondMenu) => {
  return (
    <div className={`burger-menu-second ${className}`}>
      <button className='burger-menu-second-btn' onClick={() => close()}>
        Back to main menu
      </button>
      <span className='burger-menu-second-title'>{title}</span>
      <div className='burger-menu-second-contain'>
        {secondData?.map((item) => (
          <SecondMenuItem check={check} key={item.id} secondData={item} showDrop={onClick} />
        ))}
      </div>
    </div>
  );
};

export default SecondMenu;
