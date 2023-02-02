import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1675307867666 implements MigrationInterface {
    name = 'createTable1675307867666'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" character varying NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(15) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(50) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" character varying NOT NULL, "name" character varying(200) NOT NULL, "email" character varying(100) NOT NULL, "phone" character varying(15) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "customerId" character varying, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_f418137d00d8b5a598400bbf57a" FOREIGN KEY ("customerId") REFERENCES "customer"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_f418137d00d8b5a598400bbf57a"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
