import { MigrationInterface, QueryRunner } from 'typeorm';

export class ArticleInit1706131181414 implements MigrationInterface {
  name = 'ArticleInit1706131181414';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "locations" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "articles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(100) NOT NULL, "img" character varying NOT NULL, "alt" character varying(40) NOT NULL, "content" character varying NOT NULL, "show_comments" boolean NOT NULL DEFAULT true, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "category_id" uuid, "conference_id" uuid, "team_id" uuid, "location_id" uuid, CONSTRAINT "REL_e025eeefcdb2a269c42484ee43" UNIQUE ("category_id"), CONSTRAINT "REL_2067161fc435b1667e8ca2cf60" UNIQUE ("conference_id"), CONSTRAINT "REL_4a63a93bfda461a91c9e164eea" UNIQUE ("team_id"), CONSTRAINT "REL_b36526f80f53c410d4588791d3" UNIQUE ("location_id"), CONSTRAINT "PK_0a6e2c450d83e0b6052c2793334" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "comments" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "commnet" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" uuid, "article_id" uuid, CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_87bb15395540ae06337a486a77a" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
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
    await queryRunner.query(
      `ALTER TABLE "articles" ADD CONSTRAINT "FK_b36526f80f53c410d4588791d36" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" ADD CONSTRAINT "FK_e9b498cca509147e73808f9e593" FOREIGN KEY ("article_id") REFERENCES "articles"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Germany')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Ukraine')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Poland')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('USA')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Canada')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Mexico')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Japan')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('Spain')`);
    await queryRunner.manager.query(`INSERT INTO locations (name) VALUES ('United Kingdom')`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_e9b498cca509147e73808f9e593"`,
    );
    await queryRunner.query(
      `ALTER TABLE "comments" DROP CONSTRAINT "FK_4c675567d2a58f0b07cef09c13d"`,
    );
    await queryRunner.query(
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_b36526f80f53c410d4588791d36"`,
    );
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
      `ALTER TABLE "articles" DROP CONSTRAINT "FK_87bb15395540ae06337a486a77a"`,
    );
    await queryRunner.query(`DROP TABLE "comments"`);
    await queryRunner.query(`DROP TABLE "articles"`);
    await queryRunner.query(`DROP TABLE "locations"`);
  }
}
