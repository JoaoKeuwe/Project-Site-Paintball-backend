import { GetAllPlayersService } from './../services/GetAllPlayersService';
import { Request, Response } from 'express';

export class GetAllPlayersController {
  async handle(_req: Request, res: Response) {
    try {
      const service = new GetAllPlayersService();

      const players = await service.execute();

      return res.status(200).json(players);
    } catch (err) {
      console.log(err);
      return res.status(500).json('internal server error');
    }
  }
}
