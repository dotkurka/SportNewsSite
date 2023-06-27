import SecondMenuItem from 'layouts/Mobile/components/BurgerMenu/SecondMenuItem';

import type { ISecondMenu } from 'layouts/Mobile/components/BurgerMenu/types';

import './BurgerMenu.scss';

const SecondMenu = ({ secondData, title, showDrop, check, close, className }: ISecondMenu) => {
  return (
    <div className={`burger-menu-second ${className}`}>
      <button onClick={() => close()} className='burger-menu-second-btn'>
        Back to main menu
      </button>
      <span className='burger-menu-second-title'>{title}</span>
      <div className='burger-menu-second-contain'>
        {secondData?.map((item) => (
          <SecondMenuItem key={item.path} secondData={item} showDrop={showDrop} check={check} />
        ))}
      </div>
    </div>
  );
};

export default SecondMenu;
