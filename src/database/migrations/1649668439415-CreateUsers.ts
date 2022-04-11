import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1649668439415 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({ 
          name: "users",
          columns: [
            {
              name: "id",
              type: "uuid",
            },
            {
              name: "name",
              type: "varchar",
              isPrimary: true
            },
            {
              name: "password",
              type: "varchar",
            },
            {
              name: "email",
              type: "varchar",
            },
            {
              name: "driver_licence",
              type: "varchar",
            },
            {
              name: "isAdmin",
              type: "boolean",
              default: false,
            },
            {
              name: "username",
              type: "varchar",
              isUnique: true,
            },
            {
              name: "created_at",
              type: "timestamp",
              default: "now()"
            }
          ]
         })
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("users")
    }

}
