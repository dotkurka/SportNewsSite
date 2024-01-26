import { MigrationInterface, QueryRunner } from 'typeorm';

export class ArticleRelationsFix1706212448768 implements MigrationInterface {
  name = 'ArticleRelationsFix1706212448768';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_b36526f80f53c410d4588791d36"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_e025eeefcdb2a269c42484ee43f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_2067161fc435b1667e8ca2cf602"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_4a63a93bfda461a91c9e164eeae"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "REL_b36526f80f53c410d4588791d3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "REL_e025eeefcdb2a269c42484ee43"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "REL_2067161fc435b1667e8ca2cf60"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "REL_4a63a93bfda461a91c9e164eea"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_b36526f80f53c410d4588791d36" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_e025eeefcdb2a269c42484ee43f" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_2067161fc435b1667e8ca2cf602" FOREIGN KEY ("conference_id") REFERENCES "conferences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_4a63a93bfda461a91c9e164eeae" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_4a63a93bfda461a91c9e164eeae"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_2067161fc435b1667e8ca2cf602"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_e025eeefcdb2a269c42484ee43f"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_b36526f80f53c410d4588791d36"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "REL_4a63a93bfda461a91c9e164eea" UNIQUE ("team_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "REL_2067161fc435b1667e8ca2cf60" UNIQUE ("conference_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "REL_e025eeefcdb2a269c42484ee43" UNIQUE ("category_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "REL_b36526f80f53c410d4588791d3" UNIQUE ("location_id")`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_4a63a93bfda461a91c9e164eeae" FOREIGN KEY ("team_id") REFERENCES "teams"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_2067161fc435b1667e8ca2cf602" FOREIGN KEY ("conference_id") REFERENCES "conferences"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_e025eeefcdb2a269c42484ee43f" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_b36526f80f53c410d4588791d36" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
