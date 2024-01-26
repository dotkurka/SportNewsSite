import { BadRequestException, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';

import { errorMessages } from 'src/constants';
import { FilterRule } from 'src/features/common/enums';

export interface Filtering {
  property: string;
  rule: FilterRule;
  value: string;
}

export const FilteringParams = createParamDecorator(
  (data, ctx: ExecutionContext): Filtering | null => {
    const req: Request = ctx.switchToHttp().getRequest();
    const filter = req.query.filter as string;
    if (!filter) return null;

    // check if the valid params sent is an array
    if (typeof data !== 'object') throw new BadRequestException(errorMessages.invalidFilter);

    // validate the format of the filter, if the rule is 'isnull' or 'isnotnull' it don't need to have a value
    if (
      !/^[a-zA-Z0-9_.]+:(eq|neq|gt|gte|lt|lte|like|nlike|in|nin):[a-zA-Z0-9_, ]+$/.exec(filter) &&
      !/^[a-zA-Z0-9_.]+:(isnull|isnotnull)$/.exec(filter)
    ) {
      throw new BadRequestException(errorMessages.invalidFilter);
    }

    // extract the parameters and validate if the rule and the property are valid
    const [property, filterRule, value] = filter.split(':');
    const rule = filterRule as FilterRule;
    if (!data.includes(property))
      throw new BadRequestException(`Invalid filter property: ${property}`);
    if (!Object.values(FilterRule).includes(rule))
      throw new BadRequestException(`Invalid filter rule: ${filterRule}`);

    return { property, rule, value };
  },
);
