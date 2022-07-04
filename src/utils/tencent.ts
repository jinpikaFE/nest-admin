// SECRETID 和 SECRETKEY请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
import * as COS from 'cos-nodejs-sdk-v5';

export const BUCKET = 'jinpika-1308276765';
export const COS_URL =
  'https://jinpika-1308276765.cos.ap-shanghai.myqcloud.com';

export const CosInit = new COS({
  SecretId: 'AKID3sSmpb7MK0TfZCYeT1LPCjzzh8IBn8Cy',
  SecretKey: 'XooXzA4h27vSiiRt4zd06wVnnX0C6j6B',
});
