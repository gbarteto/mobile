import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateWithDelivery1744290695963 implements MigrationInterface {
    name = 'CreateWithDelivery1744290695963'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "deliveries" ("id" character varying NOT NULL, "sale" character varying NOT NULL, "address" character varying NOT NULL, "status" character varying NOT NULL, "shipping_date" TIMESTAMP NOT NULL, "delivery_date" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a6ef225c5c5f0974e503bfb731f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "deliveries"`);
    }

}
