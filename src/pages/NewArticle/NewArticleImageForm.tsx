import { useFileUploadMutation } from 'api/fileUploadApi';
import { ImageUpload } from 'components';

import type { IImageFormik } from 'pages/NewArticle/types';

const NewArticleImageForm = ({ formikSetValue, touched, errors, value, name }: IImageFormik) => {
  const [uploadFile, { isLoading }] = useFileUploadMutation();

  const handleChangeImage = async (file: File) => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      const imageHref = await uploadFile(formData).unwrap();

      if (imageHref) formikSetValue(name, imageHref.path);
    }
  };

  return (
    <ImageUpload
      touched={touched}
      errors={errors}
      onChange={handleChangeImage}
      onDrop={handleChangeImage}
      href={value}
      isLoading={isLoading}
    />
  );
};

export default NewArticleImageForm;
