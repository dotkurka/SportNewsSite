import { MigrationInterface, QueryRunner } from 'typeorm';

export class ArticleAddSlugId1706291777579 implements MigrationInterface {
  name = 'ArticleAddSlugId1706291777579';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "articles" ADD "slug_id" character varying NOT NULL`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "articles" DROP COLUMN "slug_id"`);
  }
}
