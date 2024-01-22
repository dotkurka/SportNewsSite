import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';

import type { Conferences } from './conferences.entity';

@Entity({ name: 'categories' })
export class Categories extends BaseEntity<Categories> {
  @Column({ unique: true })
  title: string;

  @OneToMany('Conferences', 'category', {
    onDelete: 'SET NULL',
    cascade: true,
    eager: true,
  })
  conferences: Conferences[];
}
