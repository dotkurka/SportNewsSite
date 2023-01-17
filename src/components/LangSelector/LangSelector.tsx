import { useState } from 'react';
import './LangSelector.scss';

interface ILangSelector {
  lang: string;
}

const langData: ILangSelector[] = [{ lang: 'UA' }, { lang: 'FR' }, { lang: 'DE ' }];

const LangSelector = () => {
  const [langue, setLangue] = useState<string>('EN');

  const changeLang = (item: string) => {
    setLangue(item);
  };

  return (
    <div className='lang-selector'>
      <div className='lang-selector-title'>{langue}</div>

      <ul className='lang-selector-menu'>
        {langData.map((item) => (
          <li>
            <button onClick={() => changeLang(item.lang)}>{item.lang}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangSelector;
