import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch() // 捕获所有异常
export class AllExceptionsFilter implements ExceptionFilter<Error> {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // @todo 记录日志
    console.log(
      '%s %s error: %s',
      request.method,
      request.url,
      new Date().toLocaleString(),
      exception.message,
    );
    // 发送响应
    response.status(status).json({
      statusCode: status,
      message: exception.message,
      timestamp: new Date().toLocaleString(),
      path: request.url,
    });
  }
}
