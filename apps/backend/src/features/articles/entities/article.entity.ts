import {
  AfterLoad,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from 'typeorm';

import { Location } from 'src/features/articles/entities/location.entity';
import { Categories, Conferences, Teams } from 'src/features/categories';
import { BaseEntity } from 'src/features/common/entities';
import { generatePath } from 'src/utils';

import type { Comment } from 'src/features/articles/entities/comment.entity';
import type { User } from 'src/features/users';

@Entity({ name: 'articles' })
export class Article extends BaseEntity<Article> {
  @Column({ length: 100 })
  title: string;

  @Column()
  img: string;

  @Column({ length: 40 })
  alt: string;

  @Column()
  content: string;

  @Column({ default: true })
  showComments: boolean;

  @OneToMany('Comment', 'article', { onDelete: 'CASCADE', cascade: true, eager: true })
  comments: Comment[];

  @ManyToOne('User', 'articles', { eager: true })
  user: User;

  @ManyToOne('Location', 'articles', { eager: true })
  location: Location;

  @ManyToOne('Categories', 'articles', { eager: true })
  category: Categories;

  @ManyToOne('Conferences', 'articles', { eager: true })
  conference: Conferences;

  @ManyToOne('Teams', 'articles', { eager: true })
  team: Teams;

  @Column({ default: 0 })
  views: number;

  @Column()
  slugId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  path: string;

  @AfterLoad()
  generateArticlePath() {
    this.path = generatePath(this.category.title, this.team.title, this.slugId);
  }
}
