import type { HomeFormValueType, IHomeFormItem } from 'features/home/types';
import type { FormikErrors, FormikTouched } from 'formik';

export interface IHomeManagerSelectGroup {
  values: IHomeFormItem;
  setFieldValue?: (field: string, value: unknown, shouldValidate?: boolean | undefined) => void;
  className: string;
  errors?: FormikErrors<IHomeFormItem>;
  touched?: FormikTouched<IHomeFormItem>;
  name: string;
}

export interface IHomeManagerForm {
  initialValues: HomeFormValueType;
  onSubmit: (values: HomeFormValueType) => void;
  hidden?: boolean;
  submitRef: React.RefObject<HTMLButtonElement> | null;
  previewRef: React.RefObject<HTMLButtonElement> | null;
  submitAction: (action: 'preview' | 'submit') => void;
}
