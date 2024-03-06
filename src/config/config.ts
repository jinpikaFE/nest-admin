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
});
