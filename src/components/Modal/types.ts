import type { ModalVariant } from 'components/Modal/enums';

export interface IModal {
  show: boolean;
  handleShow: (value: boolean) => void;
  variant?: ModalVariant;
  customText?: IFilling;
  onClick?: () => void;
  buttonConfirmText?: string;
  className?: string;
}

interface IFilling {
  title: string;
  message: string;
  answer?: string;
}

export type ModalFillingType = { [key: string]: IFilling };
