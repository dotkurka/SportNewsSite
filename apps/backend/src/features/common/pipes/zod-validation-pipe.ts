import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ZodError, ZodSchema } from 'zod';

import { ValidationBadRequestException } from 'src/features/common/exceptions';

@Injectable()
export class ZodValidationPipe<T> implements PipeTransform {
  constructor(private schema: ZodSchema<T>) {}

  async transform(value: T) {
    try {
      const result = await this.schema.parseAsync(value);

      if (result === null || result === undefined || !Object.keys(result).length) {
        throw new BadRequestException();
      }

      return result;
    } catch (error) {
      if (error instanceof ZodError) {
        throw new ValidationBadRequestException(error, 'Validation failed');
      }

      throw error;
    }
  }
}
