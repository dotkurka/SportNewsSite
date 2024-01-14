import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';

import { UserRole } from '../../auth/enums';
import { BaseEntity } from '../../common/entities';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Column({ nullable: true })
  email: string;

  @Exclude()
  @Column({ nullable: true })
  password?: string;

  @Column({ type: 'varchar' })
  avatar: string | null;

  @Column({ type: 'enum', enum: Object.values(UserRole), default: UserRole.User })
  role: UserRole;
}
