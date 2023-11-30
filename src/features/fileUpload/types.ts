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
  id: string;
  serverPath: string;
  pathSmall?: string;
  originalName: string;
  name: string;
  size: number;
  path: string;
}
