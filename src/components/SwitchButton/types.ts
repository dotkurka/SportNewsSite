export interface ISwitchButton {
  checked: boolean;
  onChange: (e: boolean) => void;
  id?: string;
  name?: string;
  className?: string;
  disabled?: boolean;
}
