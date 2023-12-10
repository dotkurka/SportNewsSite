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
  [SelectVariant.Dots]: 'dots',
};

const Select = ({
  onBlur,
  touched,
  errors,
  options,
  label,
  onChange,
  variant = SelectVariant.Outline,
  placeholder,
  disabled,
  formikSetValue,
  defaultValue = '',
  name = 'select',
  className = '',
}: ISelect) => {
  const [selected, setSelected] = useState(defaultValue);
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

  const disabledWhenEmpty = options.length === 0 ? true : disabled;

  return (
    <div ref={selectRef} className={`select ${className}`}>
      {selectVariant[variant] === selectVariant.outline && (
        <div className='select-outline-contain'>
          <Input
            disabledIcon
            onBlur={onBlur}
            touched={touched}
            errors={errors}
            name={name}
            value={selected}
            onClick={() => handleShowMenu()}
            placeholder={placeholder}
            label={label}
            disabled={disabledWhenEmpty}
            readOnly
            type='text'
            className='select-outline-input'
          />
          <ArrowContained
            className={`select-outline-arrow ${selectShow ? 'open' : ''} ${label ? 'label' : ''}`}
          />
        </div>
      )}
      {selectVariant[variant] === selectVariant.text && (
        <button
          disabled={disabled}
          className='select-text-contain'
          onClick={() => handleShowMenu()}
        >
          {label && <span className='select-text-label'>{label}</span>}
          <span className='select-text-input'>{selected}</span>
          <ArrowText className={`select-text-arrow ${selectShow ? 'open' : ''}`} />
        </button>
      )}
      {selectVariant[variant] === selectVariant.dots && (
        <button
          disabled={disabled}
          className='select-dots-contain'
          onClick={() => handleShowMenu()}
        >
          <span className={`${selectShow ? 'selected' : ''}`}>&#183;&#183;&#183;</span>
        </button>
      )}
      {selectShow && (
        <div className={`select-list ${className ? `${className}-list` : ''}`}>
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
