import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadService {
  uploadFile(file: Express.Multer.File, request: Request) {
    console.log(file);

    fs.writeFileSync(
      path.join(__dirname, '../../../', `src/assets/${file.originalname}.png`),
      file.buffer,
      ((err: any) => {
        if (err) {
          return false;
        } else {
          return true;
        }
      }) as fs.WriteFileOptions,
    );
    const data = {
      name: `${file.originalname}.png`,
      status: 'done',
      url: `${request.protocol}://${request?.get('host')}/asset/${
        file.originalname
      }.png`,
    };
    return { code: 0, message: '上传成功', data };
  }
}
