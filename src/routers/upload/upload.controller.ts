import {
  Controller,
  Post,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Req,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { Request } from 'express';
import { RbacGuard } from 'src/guards/token.guard';

@ApiTags('upload')
@UseGuards(AuthGuard('jwt'))
@UseGuards(RbacGuard)
@Controller('/api/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  // FileInterceptor() 接收两个参数：
  // 一个 fieldName (指向包含文件的 HTML 表单的字段)
  // 可选 options 对象, 类型为 MulterOptions 。这个和被传入 multer 构造函数 (此处有更多详细信息) 的对象是同一个对象。
  // file就是表单字段
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Req() request: Request,
  ) {
    return this.uploadService.uploadFile(file, request);
  }
}
