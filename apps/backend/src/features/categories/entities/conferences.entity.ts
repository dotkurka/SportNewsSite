import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';

import type { Categories } from './categories.entity';
import type { Teams } from './teams.entity';

@Entity({ name: 'conferences' })
export class Conferences extends BaseEntity<Conferences> {
  @Column({ unique: true })
  title: string;

  @OneToMany('Teams', 'conference', { onDelete: 'SET NULL', cascade: true, eager: true })
  teams: Teams[];

  @ManyToOne('Categories', 'conferences')
  category: Categories;
}
