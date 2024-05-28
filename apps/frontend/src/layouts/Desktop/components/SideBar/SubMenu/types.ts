export interface ISubMenu<T> {
  subData: T[] | null;
  onClick: (item: T) => void;
  checked?: string | null;
  className?: string;
}
