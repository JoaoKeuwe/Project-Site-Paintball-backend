import {
  MigrationInterface,
  QueryRunner,
  Table,
} from 'typeorm';

export class CreatePlayers1645448775408 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'players',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          { name: 'playerName', type: 'varchar' },
          { name: 'picture', type: 'varchar' },
          { name: 'age', type: 'integer' },
          { name: 'description', type: 'varchar' },
          { name: 'team', type: 'varchar' },
          { name: 'role', type: 'varchar' },
          { name: 'priWeapon', type: 'varchar' },
          { name: 'secWeapon', type: 'varchar' },
          { name: 'str', type: 'integer' },
          { name: 'mov', type: 'integer' },
          { name: 'int', type: 'integer' },
          { name: 'aim', type: 'integer' },
          { name: 'eqp', type: 'integer' },
          { name: 'friendly', type: 'integer' },
          { name: 'regional', type: 'integer' },
          { name: 'state', type: 'integer' },
          { name: 'national', type: 'integer' },
          { name: 'international', type: 'integer' },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('players');
  }
}
