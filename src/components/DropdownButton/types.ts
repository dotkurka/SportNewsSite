interface IDropOption {
  value: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface IDropdownButton {
  options: IDropOption[];
  className?: string;
  disabled?: boolean;
}
