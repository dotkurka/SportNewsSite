import { Exclude } from 'class-transformer';
import { Column, Entity, OneToMany } from 'typeorm';

import { UserRole } from 'src/features/auth/enums';
import { BaseEntity } from 'src/features/common/entities';

import type { Article, Comment } from 'src/features/articles';

@Entity({ name: 'users' })
export class User extends BaseEntity<User> {
  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password?: string;

  @Column({ type: 'varchar', nullable: true })
  avatar: string | null;

  @Column({ type: 'enum', enum: Object.values(UserRole), default: UserRole.User })
  role: UserRole;

  @OneToMany('Article', 'user')
  articles: Article[];

  @OneToMany('Comment', 'user')
  comments: Comment[];
}
