import { useState } from 'react';

import { ReactComponent as ArrowContained } from 'assets/images/arrow-down-flag.svg';
import { ReactComponent as ArrowText } from 'assets/images/select-text-arrow.svg';
import { Input } from 'components';
import { SelectVariant, type ISelect } from 'components/Select/types';
import useClickOutside from 'hooks/useClickOutside';

import './Select.scss';

const selectVariant = {
  [SelectVariant.Text]: 'text',
  [SelectVariant.Outline]: 'outline',
};

const Select = ({
  options,
  label,
  onChange,
  variant = SelectVariant.Outline,
  placeholder,
  formikSetValue,
  name = 'select',
  className = '',
}: ISelect) => {
  const [selected, setSelected] = useState('');
  const [selectShow, setSelectShow] = useState(false);

  const selectRef = useClickOutside(() => setSelectShow(false));

  const changeSelect = (item: string) => {
    setSelected(item);
    setSelectShow(false);
    formikSetValue?.(name, item);
    onChange?.(item);
  };

  const handleShowMenu = () => {
    setSelectShow((show) => !show);
  };

  return (
    <div ref={selectRef} className={`select ${className}`}>
      {selectVariant[variant] === selectVariant.outline && (
        <div className='select-outline-contain'>
          <Input
            name={name}
            value={selected}
            onClick={() => handleShowMenu()}
            placeholder={placeholder}
            label={label}
            readOnly
            type='text'
            className='select-outline-input'
          />
          <ArrowContained
            className={`select-outline-arrow ${selectShow && 'open'} ${label && 'label'}`}
          />
        </div>
      )}
      {selectVariant[variant] === selectVariant.text && (
        <button className='select-text-contain' onClick={() => handleShowMenu()}>
          {label && <span className='select-text-label'>{label}</span>}
          <span className='select-text-input'>{selected} </span>
          <ArrowText className={`select-text-arrow ${selectShow && 'open'}`} />
        </button>
      )}
      {selectShow && (
        <div className='select-list'>
          {options.map((item) => (
            <button
              key={item}
              disabled={selected === item}
              className={`select-item list ${selected === item ? 'selected' : ''}`}
              onClick={() => changeSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
