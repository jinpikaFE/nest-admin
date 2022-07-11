import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import * as moment from 'moment';
import * as fs from 'fs';
import * as path from 'path';
import { BUCKET, CosInit, COS_URL } from '../../utils/tencent';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File, request: Request) {
    if (!file) {
      return { code: -1, message: '请上传文件', data: null };
    }
    const data: any = await new Promise((reslove, reject) => {
      const key = `file/${moment().format('YYYY-MM-DD')}/${
        file.originalname
      }.png`;
      CosInit.putObject(
        {
          Bucket: BUCKET /* 填入您自己的存储桶，必须字段 */,
          Region: 'ap-shanghai' /* 存储桶所在地域，例如ap-beijing，必须字段 */,
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
          reslove({ ...datas, url: `${COS_URL}/${key}` });
        },
      );
    });
    if (data?.statusCode === 200) {
      return { code: 200, message: '上传成功', data };
    }
    return { code: -1, message: '上传失败', data };
  }
}
