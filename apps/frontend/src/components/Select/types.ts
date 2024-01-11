import type { SelectVariant } from 'components/Select/enums';

export interface ISelect<T> {
  options: IOptions<T>;
  variant?: SelectVariant;
  defaultValue?: string | number;
  name?: string;
  label?: string;
  className?: string;
  clearValue?: string;
  placeholder?: string;
  errors?: string | boolean;
  touched?: boolean;
  disabled?: boolean;
  succesDisabled?: boolean;
  onChange?: (e: T) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  formikSetValue?: (field: string, value?: T | null, shouldValidate?: boolean | undefined) => void;
}

export interface IOptions<T> {
  primaryKey?: keyof T;
  options?: T[];
}
