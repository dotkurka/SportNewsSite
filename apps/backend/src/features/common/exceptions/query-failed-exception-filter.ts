import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { DatabaseError } from 'pg-protocol';

import { errorMessages } from 'src/constants';

@Catch()
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: DatabaseError & HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let message = exception.message || null;
    let status;

    switch (exception.code) {
      case '23505':
        status = HttpStatus.BAD_REQUEST;
        message = exception.detail || errorMessages.alreadyExists;
        break;

      case '22P02':
        status = HttpStatus.NOT_FOUND;
        message = errorMessages.notFound;
        break;

      default:
        status = exception.getStatus();
    }

    const errorResponse = {
      code: status,
      path: request.url,
      message,
    };

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );
    response.status(status).json(errorResponse);
  }
}
