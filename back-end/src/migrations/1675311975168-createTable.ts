import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1675311975168 implements MigrationInterface {
    name = 'createTable1675311975168'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "password" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "password" character varying(50) NOT NULL`);
    }

}
