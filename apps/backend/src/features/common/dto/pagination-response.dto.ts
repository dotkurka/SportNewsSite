export class PaginationResponseDto<T> {
  total: number;
  data: T[];
  page: number;
  limit: number;
}
