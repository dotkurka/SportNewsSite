export interface IFileRequest {
  fieldName: string;
  path: string;
  headers: object;
  originalFilename: string;
  size: number;
  name: string;
  type: string;
}

export interface IFileResponse {
  fileName: string;
  serverPath: string;
}
