import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1663709893134 implements MigrationInterface {
    name = 'createTables1663709893134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_5e1236d7feffe204333944ed649"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_5e1236d7feffe204333944ed649" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD "telephone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "clients" DROP CONSTRAINT "UQ_5e1236d7feffe204333944ed649"`);
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "telephone"`);
        await queryRunner.query(`ALTER TABLE "clients" ADD "telephone" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "clients" ADD CONSTRAINT "UQ_5e1236d7feffe204333944ed649" UNIQUE ("telephone")`);
    }

}
