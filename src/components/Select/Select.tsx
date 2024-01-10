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
  touched,
  options,
  errors,
  label,
  disabled,
  clearValue,
  placeholder,
  succesDisabled,
  formikSetValue,
  onBlur,
  onChange,
  className = '',
  defaultValue = '',
  name = 'select',
  variant = SelectVariant.Outline,
}: ISelect<DataType>) => {
  const [selected, setSelected] = useState(defaultValue);
  const [selectShow, setSelectShow] = useState(false);
  const [optionsData, setOptionsData] = useState<DataType[] | null>();

  const { primaryKey, options: optionsValues } = options;

  const selectRef = useClickOutside(() => setSelectShow(false));

  useEffect(() => {
    if (clearValue) {
      formikSetValue?.(name, null);
      setOptionsData(null);
      setSelected('');
    }
  }, [clearValue]);

  useEffect(() => {
    if (optionsValues?.length) {
      setOptionsData(optionsValues);
    }
  }, [optionsValues]);

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

  const disabledWhenEmpty = !optionsData?.length ? true : disabled;
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
            succesDisabled={succesDisabled}
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
