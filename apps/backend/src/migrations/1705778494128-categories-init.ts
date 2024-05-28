import { MigrationInterface, QueryRunner } from 'typeorm';

export class CategoriesInit1705778494128 implements MigrationInterface {
  name = 'CategoriesInit1705778494128';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "categories" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, CONSTRAINT "UQ_aa79448dc3e959720ab4c13651d" UNIQUE ("title"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "teams" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "conference_id" uuid, CONSTRAINT "UQ_0f4ebdd5345baeb38981a77d403" UNIQUE ("title"), CONSTRAINT "PK_7e5523774a38b08a6236d322403" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "conferences" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "category_id" uuid, CONSTRAINT "UQ_eb8197a2a9d5125f55120785344" UNIQUE ("title"), CONSTRAINT "PK_d28afb89755d548215ce4e7667b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "teams" ADD CONSTRAINT "FK_c01b2c4967ca10ab8383df7c47d" FOREIGN KEY ("conference_id") REFERENCES "conferences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "conferences" ADD CONSTRAINT "FK_c3e7b68f9d0d2d12478d4b932ac" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "conferences" DROP CONSTRAINT "FK_c3e7b68f9d0d2d12478d4b932ac"`,
    );
    await queryRunner.query(`ALTER TABLE "teams" DROP CONSTRAINT "FK_c01b2c4967ca10ab8383df7c47d"`);
    await queryRunner.query(`DROP TABLE "conferences"`);
    await queryRunner.query(`DROP TABLE "teams"`);
    await queryRunner.query(`DROP TABLE "categories"`);
  }
}
