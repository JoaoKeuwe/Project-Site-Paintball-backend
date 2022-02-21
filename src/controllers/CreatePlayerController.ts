import { Weapon } from './../utils/Weapon';
import { CreatePlayerService } from './../services/CreatePlayerService';
import { Role } from '../utils/Role';
import { Player } from './../entities/Player';
import { Request, Response } from 'express';

export class CreatePlayerController {
  async handle(req: Request, res: Response) {
    const player: Player = req.body;

    if(Number(player.role)) player.role = Role[Number(player.role)];
    if(Number(player.priWeapon)) player.priWeapon = Weapon[Number(player.priWeapon)];
    if(Number(player.secWeapon)) player.secWeapon = Weapon[Number(player.secWeapon)];

    const service = new CreatePlayerService();

    const result: Player | Error = await service.execute(player);

    if(result instanceof Error) return res.status(400).json(result.message);

    return res.status(200).json(result);
  }
}
