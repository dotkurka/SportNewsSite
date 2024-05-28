import { z } from 'zod';

import { fileConstants, validationMessages } from 'src/constants';

const fileSizeSchema = z
  .number()
  .refine(
    (size) => size <= fileConstants.singleImageUploadLimits.fileSize,
    validationMessages.fileSize,
  );

const imageMimeTypes = z
  .string()
  .refine(
    (mimetype) => fileConstants.imageMimeTypes.includes(mimetype),
    '.jpg, .jpeg, .png and .webp files are accepted.',
  );

const fileBufferSchema = z.custom<Buffer>();

export const imageSchema = z.object({
  fieldname: z.string(),
  originalname: z.string(),
  encoding: z.string(),
  mimetype: imageMimeTypes,
  buffer: fileBufferSchema,
  size: fileSizeSchema,
});
