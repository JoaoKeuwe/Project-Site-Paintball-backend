import { GetAllPlayersController } from './../controllers/GetAllPlayersController';
import { CreatePlayerController } from './../controllers/CreatePlayerController';
import { GetPlayerController } from '../controllers/GetPlayerController';
import { VerifyWeapon } from './../controllers/VerifyWeapon';
import { VerifyRole } from './../controllers/VerifyRole';
import { VerifyPlayerStructure } from './../controllers/VerifyPlayerStructure';
import { Router } from 'express';

const main = Router();
const player = Router();

main
  .route('/')
  .get((_req, res) => res.status(200).json('it\'s alive!'));

player
  .route('/player/:id')
  .get(new GetPlayerController().handle);

player
  .route('/player')
  .post(
    new VerifyPlayerStructure().handle,
    new VerifyRole().handle,
    new VerifyWeapon().handle,
    new CreatePlayerController().handle,
  )
  .get(
    new GetAllPlayersController().handle,
  )

export { main, player };
