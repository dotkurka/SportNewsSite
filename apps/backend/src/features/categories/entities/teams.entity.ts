import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';

import type { Conferences } from './conferences.entity';

@Entity({ name: 'teams' })
export class Teams extends BaseEntity<Teams> {
  @Column({ unique: true })
  title: string;

  @ManyToOne('Conferences', 'teams')
  conference: Conferences;
}
