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

export interface IImageFormik {
  formikSetValue: (field: string, value: string, shouldValidate?: boolean | undefined) => void;
  touched?: boolean;
  errors?: string;
  className?: string;
  value: string;
  name: string;
}
