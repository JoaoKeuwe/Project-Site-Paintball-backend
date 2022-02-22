import { Weapon } from './../utils/Weapon';
import { NextFunction, Request, Response } from 'express';

export class VerifyWeapon {
  handle(req: Request, res: Response, next: NextFunction) {
    const { priWeapon, secWeapon } = req.body;

    if (!Weapon[priWeapon] || !Weapon[secWeapon]) {
      return res.status(400).json('Invalid Weapon');
    }

    next();
  }
}
