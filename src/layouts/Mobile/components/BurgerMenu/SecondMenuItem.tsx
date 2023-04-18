import { Link } from 'react-router-dom';

import type { ISecondItem } from 'layouts/Mobile/components/BurgerMenu/types';

const SecondMenuItem = ({ secondData, showDrop, check }: ISecondItem) => {
  return (
    <>
      <Link
        onClick={() => showDrop(secondData.title)}
        className={`burger-menu-second-item ${secondData.subItem ? 'close' : ''}
         ${check === secondData.title && secondData.subItem ? 'open' : ''}`}
        to={secondData.subItem ? '/#' : secondData.path}
      >
        {secondData.title}
      </Link>

      <div className={`burger-menu-second-drop ${check === secondData.title ? 'show' : ''}`}>
        {check === secondData.title &&
          secondData.subItem?.map((drop) => (
            <Link key={drop.path} className='burger-menu-second-drop-item' to={drop.path}>
              {drop.title}
            </Link>
          ))}
      </div>
    </>
  );
};

export default SecondMenuItem;
