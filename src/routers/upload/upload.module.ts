import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { CosModule } from 'src/modules/cos/cos.module';

@Module({
  imports: [CosModule],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
