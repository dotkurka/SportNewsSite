export interface IImageUpload {
  onChange?: (file: File) => void;
  onDrop?: (file: File) => void;
  href?: string;
  className?: string;
  isLoading?: boolean;
}
