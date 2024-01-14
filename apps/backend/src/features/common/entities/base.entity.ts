import { BaseEntity as OrmBaseEntity, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity extends OrmBaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
