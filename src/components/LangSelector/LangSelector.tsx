import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import useClickOutside from 'hooks/useClickOutside';

import './LangSelector.scss';
import type { ILangSelector } from 'components/LangSelector/types';

const LangSelector = ({ langueages, initialLang }: ILangSelector) => {
  const [langue, setLangue] = useState<string>(initialLang);
  const [langShow, setLangShow] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const langRef = useClickOutside(() => setLangShow(false));
  // TODO
  const changeLang = (item: string) => {
    setLangue(item);
    setLangShow(false);
  };

  const handleShowMenu = () => {
    setLangShow(!langShow);
    setSelected(langue);
  };

  return (
    <div ref={langRef} className='lang-selector'>
      <button onClick={() => handleShowMenu()} className='lang-selector-item'>
        {langue}
        <img src={arrowFlag} alt='' />
      </button>

      {langShow && (
        <div className='lang-selector-list'>
          {langueages.map((item) => (
            <button
              key={item}
              disabled={selected === item}
              className={`lang-selector-item list ${selected === item ? 'selected' : ''}`}
              onClick={() => changeLang(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSelector;
