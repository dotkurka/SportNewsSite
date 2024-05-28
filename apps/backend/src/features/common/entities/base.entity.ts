import { BaseEntity as OrmBaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity<T> extends OrmBaseEntity {
  constructor(partial: Partial<T>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn('uuid')
  id: string;
}
