import { useState } from 'react';

import useClickOutside from 'hooks/useClickOutside';

import './LangSelector.scss';

interface ILangSelector {
  langueages: string[];
  initialLang: string;
}

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
      <div className='lang-selector-head'>
        <button onClick={() => handleShowMenu()} className='lang-selector-item'>
          {langue}
        </button>
      </div>

      {langShow && (
        <ul>
          {langueages.map((item) => (
            <li className='lang-selector-list' key={item}>
              <button
                disabled={selected === item}
                className={`lang-selector-item list ${selected === item ? 'selected' : ''}`}
                onClick={() => changeLang(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSelector;
