import checkMark from '../../assets/images/check-mark.svg';
import crossMark from '../../assets/images/cross-mark.svg';

import { InputVariant } from './types';

import type { TInput } from './types';

import './Input.scss';

const inputClass = {
  [InputVariant.Succes]: 'succes',
  [InputVariant.Error]: 'error',
  [InputVariant.Default]: '',
};

const imgVariant = {
  // TODO touched

  [InputVariant.Succes]: checkMark,
  [InputVariant.Error]: crossMark,
  [InputVariant.Default]: null,
};

const Input = ({
  type,
  label,
  placeholder,
  description,
  className,
  touched,
  errors,
  ...props
}: TInput) => {
  const errorValid = errors ? InputVariant.Error : InputVariant.Succes;

  const isValid = touched ? errorValid : InputVariant.Default;

  return (
    <div className={`input-contain ${className || ''}`}>
      <label className='input-label' htmlFor='input'>
        {label}
      </label>

      {description && <div className='res-password'>{description}</div>}

      <input
        {...props}
        type={type}
        placeholder={placeholder}
        className={`input input-${inputClass[isValid]}`}
      />

      {imgVariant && <img src={imgVariant[isValid]} className={inputClass[isValid]} alt='' />}
    </div>
  );
};

export default Input;
