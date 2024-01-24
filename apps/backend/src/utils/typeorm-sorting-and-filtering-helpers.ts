import {
  IsNull,
  Not,
  LessThan,
  LessThanOrEqual,
  MoreThan,
  MoreThanOrEqual,
  ILike,
  In,
} from 'typeorm';

import { Filtering, Sorting } from 'src/features/common/decorators';
import { FilterRule } from 'src/features/common/enums';

export const getOrder = (sort?: Sorting) => (sort ? { [sort.property]: sort.direction } : {});

const getCondition = (filter: Filtering) => {
  switch (filter.rule) {
    case FilterRule.IS_NULL: {
      return IsNull();
    }
    case FilterRule.IS_NOT_NULL: {
      return Not(IsNull());
    }
    case FilterRule.EQUALS: {
      return filter.value;
    }
    case FilterRule.NOT_EQUALS: {
      return Not(filter.value);
    }
    case FilterRule.GREATER_THAN: {
      return MoreThan(filter.value);
    }
    case FilterRule.GREATER_THAN_OR_EQUALS: {
      return MoreThanOrEqual(filter.value);
    }
    case FilterRule.LESS_THAN: {
      return LessThan(filter.value);
    }
    case FilterRule.LESS_THAN_OR_EQUALS: {
      return LessThanOrEqual(filter.value);
    }
    case FilterRule.LIKE: {
      return ILike(`%${filter.value}%`);
    }
    case FilterRule.NOT_LIKE: {
      return Not(ILike(`%${filter.value}%`));
    }
    case FilterRule.IN: {
      return In(filter.value.split(','));
    }
    case FilterRule.NOT_IN: {
      return Not(In(filter.value.split(',')));
    }
    default: {
      return {};
    }
  }
};

const handleNestedProperty = (filter: Filtering) => {
  const nestedProperties = filter.property.split('.');
  const condition = nestedProperties.reduceRight((acc, prop, index, arr) => {
    return index === arr.length - 1 ? { [prop]: getCondition(filter) } : { [prop]: acc };
  }, {});

  return condition;
};

export const getWhere = (filter?: Filtering) => {
  if (!filter) return {};

  if (filter.property.includes('.')) {
    return handleNestedProperty(filter);
  }
  return { [filter.property]: getCondition(filter) };
};
