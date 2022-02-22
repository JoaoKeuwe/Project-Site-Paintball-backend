import { Player } from '../entities/Player';
import { UpdatePlayerService } from '../services/UpdatePlayerService';
import { Role } from '../utils/Role';
import { Weapon } from '../utils/Weapon';
import { Request, Response } from 'express';

export class UpdatePlayerController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const player: Player = req.body;

      player.id = Number(id);

      if (Number(player.role)) player.role = Role[Number(player.role)];
      if (Number(player.priWeapon))
        player.priWeapon = Weapon[Number(player.priWeapon)];
      if (Number(player.secWeapon))
        player.secWeapon = Weapon[Number(player.secWeapon)];

      const service = new UpdatePlayerService();

      const result: Player | undefined = await service.execute(player);

      if (!result) throw new Error('Did not received a player');

      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json('internal server error');
    }
  }
}
