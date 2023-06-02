import * as path from 'path';

const log4jsConfig = {
  appenders: {
    /** logstash 配置 */
    logstash: {
      type: '@log4js-node/logstash-http',
      url: 'http://110.40.192.199:9200/_bulk',
      application: 'nest-admin',
      logType: 'application',
      logChannel: 'node',
    },
    console: {
      type: 'console', // 会打印到控制台
    },
    access: {
      type: '@log4js-node/logstash-http',
      url: 'http://110.40.192.199:9200/_bulk',
      application: 'nest-admin-access',
      logType: 'access',
      logChannel: 'node',
    },
    app: {
      type: '@log4js-node/logstash-http',
      url: 'http://110.40.192.199:9200/_bulk',
      application: 'nest-admin-app',
      logType: 'app',
      logChannel: 'node',
    },
    errors: {
      type: '@log4js-node/logstash-http',
      url: 'http://110.40.192.199:9200/_bulk',
      application: 'nest-admin',
      logType: 'errors',
      logChannel: 'node',
    },
  },
  categories: {
    default: {
      appenders: ['app', 'errors', 'logstash'],
      level: 'DEBUG',
    },
    info: { appenders: ['app', 'errors', 'logstash'], level: 'info' },
    access: { appenders: ['app', 'errors', 'logstash'], level: 'info' },
    http: { appenders: ['access', 'logstash'], level: 'DEBUG' },
  },
  pm2: true, // 使用 pm2 来管理项目时，打开
  pm2InstanceVar: 'INSTANCE_ID', // 会根据 pm2 分配的 id 进行区分，以免各进程在写日志时造成冲突
};

export default log4jsConfig;
