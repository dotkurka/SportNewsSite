import { useState } from 'react';
import './LangSelector.scss';

interface ILangSelector {
  lang: string;
}

const langData: ILangSelector[] = [{ lang: 'EN' }, { lang: 'UA' }, { lang: 'FR' }, { lang: 'DE ' }];

const LangSelector = () => {
  const [langue, setLangue] = useState<string>('EN');
  const [langShow, setLangShow] = useState(false);

  const changeLang = (item: string) => {
    setLangue(item);
    setLangShow(false);
  };

  const handleShowMenu = () => {
    setLangShow(!langShow);
  };

  return (
    <div className='lang-selector'>
      <button onClick={() => handleShowMenu()} className='lang-selector-item'>
        {langue}
      </button>
      {langShow && (
        <ul className='lang-selector-menu '>
          {langData.map((item) => (
            <li key={item.lang}>
              <button className='lang-selector-item' onClick={() => changeLang(item.lang)}>
                {item.lang}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LangSelector;
