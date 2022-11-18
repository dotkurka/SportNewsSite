export interface IInput {
  type: string;
  label?: string;
  placeholder?: string;
  variant?: InputVariant;
  resPassword?: boolean;
}

export enum InputVariant {
  Succes = 'succes',
  Error = 'error',
  Default = 'default',
}
