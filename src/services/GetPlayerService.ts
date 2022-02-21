import { Player } from './../entities/Player';
import { getRepository } from 'typeorm'

export class GetPlayerService {
  async execute(id: number) {
    const repository = getRepository(Player);

    const player = await repository.find({id});
    
    return player;
  }
}
