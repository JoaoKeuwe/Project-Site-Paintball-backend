import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('players')
export class Player {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  playerName: string;

  @Column()
  picture: string;

  @Column()
  age: number;

  @Column()
  description: string;

  @Column()
  team: string;

  @Column()
  role: string; // enum 1:BURRO; 2:CAPITAO; 3:SNIPER; 4: LURKER; 5:CORINGA

  @Column()
  priWeapon: string; // enum 1: pistol; 2: shotgun; 3: assault rifle; 4: precision rifle

  @Column()
  secWeapon: string;

  @Column()
  str: number;

  @Column()
  mov: number;

  @Column()
  int: number;

  @Column()
  aim: number;

  @Column()
  eqp: number;

  @Column()
  friendly: number;

  @Column()
  regional: number;

  @Column()
  state: number;

  @Column()
  national: number;

  @Column()
  international: number;
}
