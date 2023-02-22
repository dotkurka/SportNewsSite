import { Link } from 'react-router-dom';

import type { ISidebarData } from 'config/SideBarData/types';

interface ISecondItem {
  secondData: ISidebarData;
  showDrop: (item: string) => void;
  check: string | null;
}

const SecondMenuItem = ({ secondData, showDrop, check }: ISecondItem) => {
  return (
    <>
      <Link
        onClick={() => showDrop(secondData.title)}
        className={`burger-menu-second-item ${secondData.subItem ? 'close' : ''} ${
          check === secondData.title ? 'open' : ''
        }`}
        to={secondData.subItem ? '/#' : secondData.path}
      >
        {secondData.title}
      </Link>

      <div className='burger-menu-second-drop'>
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
