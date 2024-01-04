import type { ModalVariant } from 'components/Modal/enums';

export interface IModal {
  show: boolean;
  handleShow: (value: boolean) => void;
  variant?: ModalVariant;
  customText?: IModalCustomText;
  onClick?: () => void;
  buttonConfirmText?: string;
  className?: string;
}

export interface IModalCustomText {
  title: string;
  message: string;
  answer?: string;
}

export type ModalFillingType = { [key: string]: IModalCustomText };
