import checkMark from 'assets/images/check-mark.svg';
import crossMark from 'assets/images/cross-mark.svg';

import { InputVariant } from './types';

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
  placeholder,
  disabledIcon,
  description,
  className,
  touched,
  errors,
  name,
  ...props
}: IInput) => {
  const errorValid = errors ? InputVariant.Error : InputVariant.Succes;

  const isValid = touched ? errorValid : InputVariant.Default;

  return (
    <div className={`input-contain ${className || ''}`}>
      {label && (
        <label className='input-label' htmlFor={name}>
          {label}
        </label>
      )}

      {description && <div className='res-password'>{description}</div>}

      <div className='input-contain-inner'>
        <input
          {...props}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`input input-${inputClass[isValid]}`}
        />

        {imgVariant && !disabledIcon ? (
          <img src={imgVariant[isValid]} className={inputClass[isValid]} alt='' />
        ) : null}
      </div>
    </div>
  );
};

export default Input;
