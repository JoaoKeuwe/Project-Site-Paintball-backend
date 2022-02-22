import { Role } from '../../utils/Role';
import { NextFunction, Request, Response } from 'express';

export class VerifyRole {
  handle(req: Request, res: Response, next: NextFunction) {
    const { role } = req.body;

    if (!Role[role]) {
      return res.status(400).json('Invalid Role');
    }

    next();
  }
}
