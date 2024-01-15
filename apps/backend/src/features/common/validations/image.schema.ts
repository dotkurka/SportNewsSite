import { fileConstants, validationMessages } from 'src/constants';

import { fileSchema } from './file.schema';

export const imageSchema = fileSchema
  .refine(
    (file) => file.size <= fileConstants.singleImageUploadLimits.fileSize,
    validationMessages.fileSize,
  )
  .refine(
    (file) => fileConstants.imageMimeTypes.includes(file.mimetype),
    '.jpg, .jpeg, .png files are accepted.',
  );
