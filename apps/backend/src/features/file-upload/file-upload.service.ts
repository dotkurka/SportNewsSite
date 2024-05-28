import fs from 'node:fs/promises';
import nodePath from 'node:path';

import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

import envConfig from 'src/config/env.config';
import { User } from 'src/features/users';

@Injectable()
export class FileUploadService {
  static FILE_UPLOAD_PATH = '/uploads';

  constructor(
    @Inject(envConfig.KEY)
    private config: ConfigType<typeof envConfig>,
  ) {}

  getFileName(file: Express.Multer.File) {
    const fileName = file.originalname
      .split('.')
      .map((part) => slugify(part))
      .join('.');

    return `${uuidv4()}-${fileName}`;
  }

  getFilePath(fileName: string, folder = '') {
    return nodePath.join(process.cwd(), FileUploadService.FILE_UPLOAD_PATH, folder, fileName);
  }

  async uploadFile(file: Express.Multer.File, folder = '') {
    const fileName = this.getFileName(file);
    const filePath = this.getFilePath(fileName, folder);
    const fileDir = nodePath.join(process.cwd(), FileUploadService.FILE_UPLOAD_PATH, folder);

    // recursively create directory if  it does not exist
    await fs.mkdir(fileDir, { recursive: true });

    await fs.writeFile(filePath, file.buffer);

    const uploadLocation = `${this.config.backendHostUrl}${FileUploadService.FILE_UPLOAD_PATH}${folder}/${fileName}`;

    return {
      fileName,
      serverPath: uploadLocation,
    };
  }

  async removeFile(fileName: string, folder = '') {
    try {
      await fs.unlink(
        nodePath.join(process.cwd(), FileUploadService.FILE_UPLOAD_PATH, folder, fileName),
      );
      return { message: 'success' };
    } catch (error) {
      console.error(error);
      return { message: 'fail' };
    }
  }

  async removeAvatar(user: User, fileName: string) {
    if (user.avatar?.includes(fileName)) {
      const result = await this.removeFile(fileName, '/avatar');

      return result;
    }
    throw new ForbiddenException();
  }
}
