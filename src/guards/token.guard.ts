// src/guards/rbac.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { RedisInstance } from 'src/providers/database/redis';

@Injectable()
export class RbacGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // 获取请求头里的 token
    const authorization = request['headers'].authorization || void 0;
    const token = authorization?.split?.(' ')?.[1]; // authorization: Bearer xxx
    const base64Payload = token?.split?.('.')?.[1];

    if (!base64Payload) {
      // 如果 token 不匹配，禁止访问
      throw new UnauthorizedException('token is required');
    }

    const payloadBuffer = Buffer.from(base64Payload, 'base64');
    const userinfo = JSON.parse(payloadBuffer.toString());

    // 获取 redis 里缓存的 token
    const redis = await RedisInstance.initRedis('TokenGuard.canActivate', 0);
    const key = `${userinfo.id}-${userinfo.username}`;
    const cache = await redis.get(key);

    if (token !== cache) {
      // 如果 token 不匹配，禁止访问
      throw new UnauthorizedException(
        'token失效或者您的账号在其他地方登录，请重新登录',
      );
    }

    return true;
  }
}
