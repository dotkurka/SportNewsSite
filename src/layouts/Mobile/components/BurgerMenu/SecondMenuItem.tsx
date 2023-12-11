import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { BurgerMenuContext } from 'layouts/Mobile/components/BurgerMenu/BurgerMenu';

import type { ISecondItem } from 'layouts/Mobile/components/BurgerMenu/types';

const SecondMenuItem = ({ secondData, showDrop, check }: ISecondItem) => {
  const openMenu = check === secondData.title && secondData.team ? 'open' : '';
  const closeMenu = secondData.team ? 'close' : '';
  const handleHidden = useContext(BurgerMenuContext);

  return (
    <>
      {secondData.team ? (
        <button
          onClick={() => showDrop(secondData.title)}
          className={`burger-menu-second-item ${closeMenu} ${openMenu}`}
        >
          {secondData.title}
        </button>
      ) : (
        <Link
          onClick={() => showDrop(secondData.title)}
          className={`burger-menu-second-item ${closeMenu} ${openMenu}`}
          to={secondData.path}
        >
          {secondData.title}
        </Link>
      )}

      <div className={`burger-menu-second-drop ${check === secondData.title ? 'show' : ''}`}>
        {check === secondData.title &&
          secondData.team.map((drop) => (
            <Link
              onClick={handleHidden}
              key={drop.path}
              className='burger-menu-second-drop-item'
              to={drop.path}
            >
              {drop.title}
            </Link>
          ))}
      </div>
    </>
  );
};

export default SecondMenuItem;
