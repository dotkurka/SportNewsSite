import checkMark from '../../assets/images/check-mark.svg';
import crossMark from '../../assets/images/cross-mark.svg';
import TextLink from '../TextLink/TextLink';
import { TextLinkVariant } from '../TextLink/types';

import { InputVariant } from './types';

import type { IInput } from './types';

import './Input.scss';

const Input = ({
  type,
  label,
  placeholder,
  resPassword,
  variant = InputVariant.Default,
}: IInput) => {
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

  return (
    <div className='input-contain'>
      <label className='input-label' htmlFor='input'>
        {label}
      </label>

      {resPassword && (
        <div className='res-password'>
          <TextLink variant={TextLinkVariant.Body2}>Forgot password?</TextLink>
        </div>
      )}

      <input
        id='input'
        type={type}
        placeholder={placeholder}
        className={`input input-${inputClass[variant]} `}
      />

      {imgVariant && <img src={imgVariant[variant]} className={inputClass[variant]} alt='' />}
    </div>
  );
};

export default Input;
