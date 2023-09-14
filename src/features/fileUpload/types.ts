export interface IFileRequest {
  fieldName: string;
  originalFilename: string;
  path: string;
  headers: object;
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
