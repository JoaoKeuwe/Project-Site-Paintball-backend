import { GetAllPlayersService } from './../services/GetAllPlayersService';
import { Request, Response } from 'express';

export class GetAllPlayersController {
  async handle(_req: Request, res: Response) {
    const service = new GetAllPlayersService();

    const players = await service.execute();

    return res.status(200).json(players);
  }
}
