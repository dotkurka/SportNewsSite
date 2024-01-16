import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { ParseParams, ZodError, ZodObject, ZodRawShape } from 'zod';

import { ValidationBadRequestException } from 'src/features/common/exceptions';

@Injectable()
export class ZodValidationPipe<T extends ZodRawShape> implements PipeTransform {
  constructor(
    private schema: ZodObject<T>,
    private options?: Partial<ParseParams>,
  ) {}

  async transform(value: T) {
    try {
      const result = await this.schema.parseAsync(value, this.options);

      if (!Object.keys(result).length) {
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
