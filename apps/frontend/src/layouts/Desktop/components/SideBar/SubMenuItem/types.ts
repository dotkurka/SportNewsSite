export interface ISubMenuItem<T> {
  subData: T;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
}
