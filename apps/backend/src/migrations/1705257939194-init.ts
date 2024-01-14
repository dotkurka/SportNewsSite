import { hashSync, genSaltSync } from 'bcrypt';
import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1705257939194 implements MigrationInterface {
  name = 'Init1705257939194';

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
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "avatar" character varying, "role" "public"."users_role_enum" NOT NULL DEFAULT 'user', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`,
    );

    await queryRunner.manager.query(
      `INSERT INTO users (first_name, last_name, email, password, role) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${adminPassword}', 'admin')`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TYPE "public"."users_role_enum"`);
  }
}
