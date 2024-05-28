import { Exclude } from 'class-transformer';
import { AfterLoad, Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';
import { generatePath } from 'src/utils';

import type { Conferences } from './conferences.entity';
import type { Article } from 'src/features/articles';

@Entity({ name: 'teams' })
export class Teams extends BaseEntity<Teams> {
  @Column({ unique: true })
  title: string;

  @Exclude()
  @ManyToOne('Conferences', 'teams', { eager: true })
  @JoinColumn()
  conference: Conferences;

  @OneToMany('Article', 'team')
  articles: Article[];

  path: string;

  @AfterLoad()
  generateTeamPath(): void {
    this.path = generatePath(this.conference.category?.title || '', this.title);
  }
}
