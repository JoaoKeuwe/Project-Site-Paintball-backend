import { Request, Response } from 'express';
import { DeletePlayerService } from '../services/DeletePlayerService';

export class DeletePlayerController {
  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params;
      if (!Number(id)) return res.status(404).json('Not Found');

      const service = new DeletePlayerService();

      await service.execute(Number(id));

      return res.status(204);
    } catch (err) {
      console.log(err);
      return res.status(500).json('internal server error');
    }
  }
}