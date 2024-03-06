export default () => ({
  port: parseInt(process.env.PORT, 10) || 3003,
  database: {
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  initAdmin: {
    username: process.env.INIT_ADMIN_USERNAME,
    password: process.env.INIT_ADMIN_PASSWORD,
  },
  tencent: {
    SecretId: process.env.TENCENT_SECRET_ID,
    SecretKey: process.env.TENCENT_SECRET_KEY,
    sms_region: process.env.TENCENT_SMS_REGION,
    SMS_APPID: process.env.TENCENT_SMS_APPID,
    SIGN_NAME: process.env.TENCENT_SIGN_NAME,
    TEMP_ID: process.env.TENCENT_TEMP_ID,
    BUCKET: process.env.TENCENT_BUCKET,
    COS_URL: process.env.TENCENT_COS_URL,
    cosRegion: process.env.TENCENT_COS_REGION,
  },
  redis: {
    host: process.env.REDIS_HOST,
    redis: process.env.REDIS_PORT,
  },
});
