import { Player } from './../entities/Player';
import { getRepository } from 'typeorm'

export class GetAllPlayersService {
  async execute() {
    const repository = getRepository(Player);

    const players = await repository.find();
    
    return players;
  }
}
