import { Request, Response, NextFunction } from 'express';

export class VerifyPlayerStructure {
  handle(req: Request, res: Response, next: NextFunction) {
    const {
      playerName, picture, age, description, team, role,
      priWeapon, secWeapon, str, mov, int, aim, eqp,
      friendly, regional, state, national, international,
    } = req.body;

    let isComplete: boolean =
      playerName && typeof playerName === 'string'
      && picture && typeof picture === 'string'
      && age && typeof age === 'number' 
      && description && typeof description === 'string' 
      && team && typeof team === 'string' 
      && role && typeof role === 'string' 
      && priWeapon && typeof priWeapon === 'string' 
      && secWeapon && typeof secWeapon === 'string' 
      && str && typeof str === 'number' 
      && mov && typeof mov === 'number' 
      && int && typeof int === 'number' 
      && aim && typeof aim === 'number' 
      && eqp && typeof eqp === 'number' 
      && friendly && typeof friendly === 'number' 
      && regional && typeof regional === 'number' 
      && state && typeof state === 'number' 
      && national && typeof national === 'number' 
      && international && typeof international === 'number';

    if (!isComplete) return res.status(400).json('Invalid player format');

    next();
  }
}
