import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  UpdateDateColumn,
} from 'typeorm';

import { Location } from 'src/features/articles/entities/location.entity';
import { Categories, Conferences, Teams } from 'src/features/categories';
import { BaseEntity } from 'src/features/common/entities';

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

  @OneToOne(() => Categories, { eager: true })
  @JoinColumn()
  category: Categories;

  @OneToOne(() => Conferences, { eager: true })
  @JoinColumn()
  conference: Conferences;

  @OneToOne(() => Teams, { eager: true })
  @JoinColumn()
  team: Teams;

  @OneToOne(() => Location, { eager: true })
  @JoinColumn()
  location: Location;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
