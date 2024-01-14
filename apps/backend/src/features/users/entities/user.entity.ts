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
}
