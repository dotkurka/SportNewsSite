export interface IImageUpload {
  touched?: boolean;
  errors?: string;
  onChange?: (file: File) => void;
  onDrop?: (file: File) => void;
  handleRemove?: (state: string) => void;
  href?: string;
  className?: string;
  isLoading?: boolean;
}
