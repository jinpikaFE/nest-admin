import * as COS from 'cos-nodejs-sdk-v5';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CosService {
  public CosInit;
  constructor(private configService: ConfigService) {
    this.CosInit = new COS({
      SecretId: configService.get<string>('tencent.SecretId'),
      SecretKey: configService.get<string>('tencent.SecretKey'),
    });
  }
}
