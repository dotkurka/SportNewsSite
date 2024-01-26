import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

import { errorMessages } from 'src/constants';

export interface Pagination {
  page: number;
  limit: number;
  offset: number;
}

export const PaginationParams = createParamDecorator((data, ctx: ExecutionContext): Pagination => {
  const req: Request = ctx.switchToHttp().getRequest();
  const page = parseInt(req.query.page as string);
  const limit = parseInt(req.query.limit as string);

  // check if page and size are valid
  if (isNaN(page) || page < 0 || isNaN(limit) || limit < 0) {
    throw new BadRequestException(errorMessages.invalidPagination);
  }
  // do not allow to fetch large slices of the dataset
  if (limit > 100) {
    throw new BadRequestException(`${errorMessages.invalidPagination}: Max size is 100`);
  }

  const offset = page * limit - limit;
  return { page, limit, offset };
});
