<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Nest Admin

通用的后台管理项目

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

[掘金参考文章](https://juejin.cn/column/6960949607794737159)

基于掘金教程，加入个人想法编写的一套通用admin后端项目

[项目文档实例-详细](http://nestadmin.jinxinapp.cn/doc/)

[swagger实例-详细](http://nestadmin.jinxinapp.cn/docs/)

[前端示例](http://nestadmin_dt.jinxinapp.cn/login)

## 主要功能

- JWT登录鉴权
- log4js日志系统
- mongodb数据库链接，进行数据处理
- DTO、class-validator参数校验
- 基础的RBAC
- swagger自动生成接口文档
- Compodoc生成Nest项目说明文档

## 一、安装依赖

```bash
$ npm install
```

## 二、添加配置文件

- 需要自行在项目根目录下创建.env文件
- 新建修改配置需要在.env 和 config/config.ts 同时操作

```bash
# .env
# 项目启动端口
PORT=3003
# 数据库配置
# mysql 数据库
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_DATABASE=nest_admin

# 初始admin用户配置
INIT_ADMIN_USERNAME=admin
INIT_ADMIN_PASSWORD=adminjpk

# jwt 配置
JWT_SECRET=jinpika0517
JWT_EXPIRES_IN=24h

# 腾讯云
# 不影响项目启动
# 只影响文件上传接口和短信接口
TENCENT_SECRET_ID=你的腾讯云配置
TENCENT_SECRET_KEY=你的腾讯云配置
TENCENT_SMS_REGION=你的腾讯云配置
TENCENT_SMS_APPID=你的腾讯云配置
TENCENT_SIGN_NAME=你的腾讯云配置
TENCENT_TEMP_ID=你的腾讯云配置
TENCENT_BUCKET=你的腾讯云配置
TENCENT_COS_URL=你的腾讯云配置
TENCENT_COS_REGION=你的腾讯云配置

# redis配置
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_DB=0
REDIS_PWD=
```

## 三、启动项目

```bash
# development
$ npm run start
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

## 2.0.1_mysql 更新 主要使用mysql

- 登录优化
- 数据库一对多，多对多优化
- 文件上传优化
- 使用 typeorm_mysql

## 2.0.1_mysql_redis 更新

- 使用redis进行挤出登录功能
