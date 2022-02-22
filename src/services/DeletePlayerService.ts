import { Player } from './../entities/Player';
import { getRepository } from 'typeorm'

export class DeletePlayerService {
  async execute(id: number) {
    const repository = getRepository(Player);

    await repository.delete(id);
  }
}
