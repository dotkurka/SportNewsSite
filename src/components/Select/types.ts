export interface ISelect {
  options: string[];
  variant?: SelectVariant;
  className?: string;
  name?: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: string) => void;
  formikSetValue?: (field: string, value: string, shouldValidate?: boolean | undefined) => void;
}

export enum SelectVariant {
  Outline = 'outline',
  Text = 'text',
}
