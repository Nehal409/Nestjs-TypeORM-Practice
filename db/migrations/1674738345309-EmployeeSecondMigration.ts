import { MigrationInterface, QueryRunner } from "typeorm";

export class EmployeeSecondMigration1674738345309 implements MigrationInterface {
    name = 'EmployeeSecondMigration1674738345309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contact_info\` ADD \`employee_id\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_07278e1532a8daa462123fb7bc1\``);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`employeeId\` \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4a920dfa304e096fad40e8c4a0\``);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`managerId\` \`managerId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` DROP FOREIGN KEY \`FK_f188a018423a2cc75535509ff97\``);
        await queryRunner.query(`ALTER TABLE \`contact_info\` CHANGE \`phone\` \`phone\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` CHANGE \`employeeId\` \`employeeId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_07278e1532a8daa462123fb7bc1\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4a920dfa304e096fad40e8c4a0\` FOREIGN KEY (\`managerId\`) REFERENCES \`employee\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` ADD CONSTRAINT \`FK_f188a018423a2cc75535509ff97\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`contact_info\` DROP FOREIGN KEY \`FK_f188a018423a2cc75535509ff97\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_f4a920dfa304e096fad40e8c4a0\``);
        await queryRunner.query(`ALTER TABLE \`task\` DROP FOREIGN KEY \`FK_07278e1532a8daa462123fb7bc1\``);
        await queryRunner.query(`ALTER TABLE \`contact_info\` CHANGE \`employeeId\` \`employeeId\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` CHANGE \`phone\` \`phone\` varchar(255) NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` ADD CONSTRAINT \`FK_f188a018423a2cc75535509ff97\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` CHANGE \`managerId\` \`managerId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_f4a920dfa304e096fad40e8c4a0\` FOREIGN KEY (\`managerId\`) REFERENCES \`employee\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`task\` CHANGE \`employeeId\` \`employeeId\` int NULL DEFAULT 'NULL'`);
        await queryRunner.query(`ALTER TABLE \`task\` ADD CONSTRAINT \`FK_07278e1532a8daa462123fb7bc1\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`contact_info\` DROP COLUMN \`employee_id\``);
    }

}
