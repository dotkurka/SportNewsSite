import { AfterLoad, Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';
import { generatePath } from 'src/utils';

import type { Conferences } from './conferences.entity';
import type { Article } from 'src/features/articles';

@Entity({ name: 'categories' })
export class Categories extends BaseEntity<Categories> {
  @Column({ unique: true })
  title: string;

  @OneToMany('Conferences', 'category', {
    onDelete: 'SET NULL',
    cascade: true,
  })
  conferences: Conferences[];

  @OneToMany('Article', 'category')
  articles: Article[];

  path: string;

  @AfterLoad()
  generateCategoryPath(): void {
    this.path = generatePath(this.title);
  }
}
