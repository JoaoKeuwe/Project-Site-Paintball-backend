import { Player } from './../entities/Player';
import { getRepository } from 'typeorm'

type PlayerRequest = {
  playerName: string;
  picture: string;
  age: number;
  description: string;
  team: string;
  role: string; // enum 1:BURRO; 2:CAPITAO; 3:SNIPER; 4: LURKER; 5:CORINGA
  priWeapon: string; // enum 1: pistol; 2: shotgun; 3: assault rifle; 4: precision rifle
  secWeapon: string;
  str: number;
  mov: number;
  int: number;
  aim: number;
  eqp: number;
  friendly: number;
  regional: number;
  state: number;
  national: number;
  international: number;
}

export class CreatePlayerService {
  async execute(player: PlayerRequest): Promise<Player | Error> {
    const repository = getRepository(Player);
    
    if(await repository.findOne({playerName: player.playerName})) return new Error('Player already exists');

    const newPlayer = repository.create(player);

    await repository.save(newPlayer);

    return newPlayer;
  }
}
