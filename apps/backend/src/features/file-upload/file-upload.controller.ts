import {
  Controller,
  Delete,
  Post,
  UploadedFile,
  UseInterceptors,
  UsePipes,
  Param,
  Res,
  Get,
  Req,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

import { Authorized, UserRole } from 'src/features/auth';
import { RequestWithUser } from 'src/features/auth/interfaces';
import { ZodValidationPipe } from 'src/features/common/pipes';
import { imageSchema } from 'src/features/file-upload/validation';

import { FileUploadService } from './file-upload.service';

@Controller(FileUploadService.FILE_UPLOAD_PATH)
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Authorized()
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new ZodValidationPipe(imageSchema))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const result = await this.fileUploadService.uploadFile(file);

    return result;
  }

  @Get(':fileName')
  getUploadedFile(@Param('fileName') fileName: string, @Res() res: Response) {
    const filePath = this.fileUploadService.getFilePath(fileName);

    res.sendFile(filePath);
  }

  @Authorized(UserRole.Admin)
  @Delete(':fileName')
  async removeFile(@Param('fileName') fileName: string) {
    const result = await this.fileUploadService.removeFile(fileName);

    return result;
  }

  @Authorized()
  @Post('avatar')
  @UseInterceptors(FileInterceptor('file'))
  @UsePipes(new ZodValidationPipe(imageSchema))
  async uploadUserAvatar(@UploadedFile() file: Express.Multer.File) {
    const result = await this.fileUploadService.uploadFile(file, '/avatar');

    return result;
  }

  @Get(':fileName')
  getUserAvatar(@Param('fileName') fileName: string, @Res() res: Response) {
    const filePath = this.fileUploadService.getFilePath(fileName, '/avatar');

    res.sendFile(filePath);
  }

  @Authorized()
  @Delete('avatar/:fileName')
  async removeUserAvatar(@Req() req: RequestWithUser, @Param('fileName') fileName: string) {
    const result = await this.fileUploadService.removeAvatar(req.user, fileName);

    return result;
  }
}
