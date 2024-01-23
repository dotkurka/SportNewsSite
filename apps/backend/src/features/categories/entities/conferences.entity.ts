import { Exclude } from 'class-transformer';
import { AfterLoad, Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';
import { generatePath } from 'src/utils';

import type { Categories } from './categories.entity';
import type { Teams } from './teams.entity';

@Entity({ name: 'conferences' })
export class Conferences extends BaseEntity<Conferences> {
  @Column({ unique: true })
  title: string;

  @OneToMany('Teams', 'conference', { onDelete: 'SET NULL', cascade: true })
  teams: Teams[];

  @Exclude()
  @ManyToOne('Categories', 'conferences', { eager: true })
  @JoinColumn()
  category: Categories;

  path: string;

  @AfterLoad()
  generateConferencePath(): void {
    this.path = generatePath(this.category.title || '', this.title);
  }
}
