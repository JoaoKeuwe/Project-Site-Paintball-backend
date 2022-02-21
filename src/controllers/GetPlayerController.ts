import { GetPlayerService } from './../services/GetPlayerService';
import { Request, Response } from 'express';

export class GetPlayerController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!Number(id)) return res.status(404).json('Not Found');

      const service = new GetPlayerService();

      const player = await service.execute(Number(id));

      if (!player || player.length < 1)
        return res.status(404).json('Not Found');

      return res.status(200).json(player);
    } catch (err) {
      console.log(err);
      return res.status(500).json('internal server error');
    }
  }
}
