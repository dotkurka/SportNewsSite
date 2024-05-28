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
import { ValidationBadRequestException } from 'src/features/common/exceptions/validation-bad-request-exception';

@Catch()
export class QueryFailedExceptionFilter implements ExceptionFilter {
  catch(exception: DatabaseError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    let message = exception.message || null;
    let status;

    const defaultStatus =
      exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;

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
        status = defaultStatus;
    }

    const errorData = {
      code: status,
      path: request.url,
      message,
    };

    const errorResponse =
      exception instanceof ValidationBadRequestException ? exception.getResponse() : errorData;

    Logger.error(
      `${request.method} ${request.url}`,
      JSON.stringify(errorResponse),
      'ExceptionFilter',
    );
    response.status(status).json(errorResponse);
  }
}
