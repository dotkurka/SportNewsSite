import { useEffect, useState } from 'react';

import { ReactComponent as ArrowContained } from 'assets/images/arrow-down-flag.svg';
import { ReactComponent as ArrowText } from 'assets/images/select-text-arrow.svg';
import { Input } from 'components';
import { SelectVariant } from 'components/Select/enums';
import useClickOutside from 'hooks/useClickOutside';

import type { ISelect } from 'components/Select/types';

import './Select.scss';

const selectVariant = {
  [SelectVariant.Text]: 'text',
  [SelectVariant.Outline]: 'outline',
};

const Select = <DataType,>({
  onBlur,
  touched,
  errors,
  options,
  label,
  onChange,
  clearValue,
  variant = SelectVariant.Outline,
  placeholder,
  disabled,
  formikSetValue,
  defaultValue = '',
  name = 'select',
  className = '',
}: ISelect<DataType>) => {
  const [selected, setSelected] = useState(defaultValue);
  const [selectShow, setSelectShow] = useState(false);

  const { primaryKey, options: optionsData } = options;
  const selectRef = useClickOutside(() => setSelectShow(false));

  useEffect(() => {
    if (clearValue) {
      formikSetValue?.(name, null);
      setSelected('');
    }
  }, [clearValue]);

  const changeSelect = (item: DataType) => {
    const value = primaryKey ? item[primaryKey] : item;
    setSelected(value as string);
    setSelectShow(false);
    formikSetValue?.(name, item);
    onChange?.(item);
  };

  const handleShowMenu = () => {
    setSelectShow((show) => !show);
  };

  const disabledWhenEmpty = !options.options ? true : disabled;
  const selectOpen = selectShow ? 'open' : '';

  return (
    <div ref={selectRef} className={`select ${className}`}>
      {selectVariant[variant] === selectVariant.outline && (
        <div className='select-outline-contain'>
          <Input
            disabledIcon
            readOnly
            type='text'
            name={name}
            label={label}
            onBlur={onBlur}
            errors={errors}
            value={selected}
            touched={touched}
            placeholder={placeholder}
            disabled={disabledWhenEmpty}
            className='select-outline-input'
            onClick={() => handleShowMenu()}
          />
          <ArrowContained
            className={`select-outline-arrow ${selectOpen} ${label ? 'label' : ''}`}
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
          <ArrowText className={`select-text-arrow ${selectOpen}`} />
        </button>
      )}
      {selectShow && (
        <div className={`select-list ${className ? `${className}-list` : ''}`}>
          {optionsData?.map((item, index) => {
            const value = primaryKey ? item[primaryKey] : item;
            return (
              <button
                key={index}
                disabled={selected === value}
                className={`select-item list ${selected === value ? 'selected' : ''}`}
                onClick={() => changeSelect(item)}
              >
                {value as string}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Select;
