import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as moment from 'moment';
import { ConfigService } from '@nestjs/config';
import { CosService } from 'src/modules/cos/cos.service';

@Injectable()
export class UploadService {
  constructor(
    private configService: ConfigService,
    private cosService: CosService,
  ) {}

  async uploadFile(file: Express.Multer.File, request: Request) {
    if (!file) {
      return { code: -1, message: '请上传文件', data: null };
    }
    const data: any = await new Promise((reslove, reject) => {
      const key = `file/${moment().format('YYYY-MM-DD')}/${
        file.originalname
      }.png`;
      this.cosService.CosInit.putObject(
        {
          Bucket:
            this.configService.get<string>(
              'tencent.BUCKET',
            ) /* 填入您自己的存储桶，必须字段 */,
          Region:
            this.configService.get<string>(
              'tencent.cosRegion',
            ) /* 存储桶所在地域，例如ap-beijing，必须字段 */,
          Key: key /* 存储在桶里的对象键（例如1.jpg，a/b/test.txt），必须字段 */,
          Body: file.buffer, // 上传文件对象
          ContentLength: file.size,
          onProgress: function (progressData) {
            console.log(JSON.stringify(progressData));
          },
        },
        (err, datas) => {
          if (err) {
            reject(err);
          }
          reslove({
            ...datas,
            url: `${this.configService.get<string>('tencent.COS_URL')}/${key}`,
          });
        },
      );
    });
    if (data?.statusCode === 200) {
      return { code: 200, message: '上传成功', data };
    }
    return { code: -1, message: '上传失败', data };
  }
}
