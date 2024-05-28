const mimeTypes = {
  png: 'image/png',
  jpeg: 'image/jpeg',
  jpg: 'image/jpg',
};

const singleImageUploadLimits = {
  fileSize: 1024 * 1024 * 5, // 5 MB
  files: 1,
};

const fileConstants = {
  mimeTypes,
  imageMimeTypes: [mimeTypes.jpeg, mimeTypes.jpg, mimeTypes.png],
  singleImageUploadLimits,
};

export default fileConstants;
