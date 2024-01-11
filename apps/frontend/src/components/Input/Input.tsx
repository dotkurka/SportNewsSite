import { useId, useState } from 'react';

import checkMark from 'assets/images/check-mark.svg';
import crossMark from 'assets/images/cross-mark.svg';
import { ReactComponent as EyeIcon } from 'assets/images/password-eye-icon.svg';

import { InputVariant } from './enums';

import type { IInput } from './types';

import './Input.scss';

const inputClass = {
  [InputVariant.Succes]: 'succes',
  [InputVariant.Error]: 'error',
  [InputVariant.Default]: '',
};

const imgVariant = {
  [InputVariant.Succes]: checkMark,
  [InputVariant.Error]: crossMark,
  [InputVariant.Default]: null,
};

const Input = ({
  type,
  label,
  succesDisabled,
  placeholder,
  disabledIcon,
  description,
  showPassword,
  className,
  touched,
  errors,
  name,
  ...props
}: IInput) => {
  const [inputType, setInputType] = useState(type);
  const inputId = useId();

  const handleTypeToggle = () => {
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  const succes = succesDisabled ? InputVariant.Default : InputVariant.Succes;
  const errorValid = errors ? InputVariant.Error : succes;
  const isValid = touched ? errorValid : InputVariant.Default;

  return (
    <div className={`input-contain ${className || ''}`}>
      {label && (
        <label className='input-label' htmlFor={inputId}>
          {label}
        </label>
      )}
      {description && <div className='res-password'>{description}</div>}
      <div className='input-contain-inner'>
        <input
          {...props}
          className={`input input-${inputClass[isValid]}`}
          id={inputId}
          name={name}
          placeholder={placeholder}
          type={inputType}
        />
        {showPassword && (
          <button className='input-password-eye' onClick={handleTypeToggle} type='button'>
            <EyeIcon />
          </button>
        )}
        {imgVariant && !disabledIcon && !showPassword ? (
          <img alt='' className={inputClass[isValid]} src={imgVariant[isValid] || ''} />
        ) : null}
      </div>
    </div>
  );
};

export default Input;
