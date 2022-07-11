// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
import * as COS from 'cos-nodejs-sdk-v5';
import { TencentConfig } from 'src/config/tencent';

export const BUCKET = 'jinpika-1308276765';
export const COS_URL =
  'https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com';

export const CosInit = new COS({
  SecretId: TencentConfig.SecretId,
  SecretKey: TencentConfig.SecretKey,
});
