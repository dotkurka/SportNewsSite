import type { SelectVariant } from 'components/Select/enums';

export interface ISelect<T> {
  options: IOptions<T>;
  touched?: boolean;
  errors?: string;
  className?: string;
  defaultValue?: string;
  variant?: SelectVariant;
  disabled?: boolean;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: T) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  formikSetValue?: (
    field: string,
    value: T | undefined,
    shouldValidate?: boolean | undefined,
  ) => void;
}

export interface IOptions<T> {
  primaryKey?: keyof T;
  options?: T[];
}
