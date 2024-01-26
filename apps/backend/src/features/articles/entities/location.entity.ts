import { Column, Entity, OneToMany } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';

import type { Article } from 'src/features/articles/entities/article.entity';

@Entity({ name: 'locations' })
export class Location extends BaseEntity<Comment> {
  @Column({ length: 50 })
  name: string;

  @OneToMany('Article', 'location')
  articles: Article[];
}
