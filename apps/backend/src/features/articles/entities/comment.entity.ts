import { Column, CreateDateColumn, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from 'src/features/common/entities';

import type { Article } from 'src/features/articles/entities/article.entity';
import type { User } from 'src/features/users';

@Entity({ name: 'comments' })
export class Comment extends BaseEntity<Comment> {
  @Column()
  comment: string;

  @ManyToOne('User', 'comments', { eager: true })
  user: User;

  @ManyToOne('Article', 'comments')
  article: Article;

  @CreateDateColumn()
  createdAt: Date;
}
