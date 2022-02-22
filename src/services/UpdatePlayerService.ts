import { Player } from './../entities/Player';
import { getRepository } from 'typeorm'

export class UpdatePlayerService {
  async execute(payload: Player) {
    const repository = getRepository(Player);

    await repository.update(payload.id, payload);

    const player = await repository.findOne({id: payload.id});
    
    return player;
  }
}
