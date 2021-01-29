import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNullable1611886218386 implements MigrationInterface {
    name = 'fixNullable1611886218386'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "name" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" DROP NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "update_at" DROP NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "update_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" SET NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "name" SET NOT NULL`, undefined);
    }

}
