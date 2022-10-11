import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createUser1664924868380 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'username',
                        type: 'varchar',
                        isUnique: true,
                    }, 
                    {
                        name: 'password',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'driver_license',
                        type: 'varchar',
                    },
                    {
                        name: 'isAdmin',
                        type: 'boolean',
                        default: false,
                    },

                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }

}
