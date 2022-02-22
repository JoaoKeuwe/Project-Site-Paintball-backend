import { Player } from './../entities/Player';
import { NextFunction, Request, Response } from 'express';
import { GetPlayerService } from '../services/GetPlayerService';

export class VerifyPlayerExistence {
  async handle(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    if (!Number(id)) return res.status(404).json('Not Found');

    const service = new GetPlayerService();

    const [player] = await service.execute(Number(id));

    if (!player) return res.status(404).json('Not Found');

    next();
  }
}
