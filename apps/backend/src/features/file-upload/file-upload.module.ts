import { Module } from '@nestjs/common';

import { FileUploadController } from 'src/features/file-upload/file-upload.controller';
import { FileUploadService } from 'src/features/file-upload/file-upload.service';

@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],
  exports: [FileUploadService],
})
export class FileUploadModule {}
