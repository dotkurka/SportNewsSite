export interface ISelect extends React.HTMLProps<HTMLInputElement> {
  options: string[];
  placeholder?: string;
  label?: string;
}
