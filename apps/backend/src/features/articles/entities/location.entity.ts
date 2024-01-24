import { Column, Entity } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';

@Entity({ name: 'locations' })
export class Location extends BaseEntity<Comment> {
  @Column({ length: 50 })
  name: string;
}
