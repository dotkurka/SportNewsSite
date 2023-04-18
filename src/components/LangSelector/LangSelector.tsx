import { useState } from 'react';

import arrowFlag from 'assets/images/arrow-down-flag.svg';
import useClickOutside from 'hooks/useClickOutside';

import './LangSelector.scss';
import type { ILangSelector, Langue } from 'components/LangSelector/types';

const LangSelector = ({ langueages, initialLang }: ILangSelector) => {
  const [langue, setLangue] = useState<Langue>(initialLang);
  const [selected, setSelected] = useState<Langue | null>(null);
  const [langShow, setLangShow] = useState(false);

  const langRef = useClickOutside(() => setLangShow(false));
  // TODO add an operation that will change the language of the entire site
  const changeLang = (item: Langue) => {
    setLangue(item);
    setLangShow(false);
  };

  const handleShowMenu = () => {
    setLangShow((land) => !land);
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
