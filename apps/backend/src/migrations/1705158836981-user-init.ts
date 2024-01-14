import { genSaltSync, hashSync } from 'bcrypt';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserInit1705158836981 implements MigrationInterface {
  name = 'UserInit1705158836981';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const user = {
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@example.com',
      password: 'Admin1234',
    };

    const adminPassword = hashSync(user.password, genSaltSync());

    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.query(`CREATE TYPE "public"."users_role_enum" AS ENUM('user', 'admin')`);

    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying UNIQUE NOT NULL, "password" character varying NOT NULL, "avatar" character varying, "role" "public"."users_role_enum" NOT NULL DEFAULT 'user')`,
    );

    await queryRunner.manager.query(
      `INSERT INTO users (firstName, lastName, email, password, role) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${adminPassword}', 'admin')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }
}
