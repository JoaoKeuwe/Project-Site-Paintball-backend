import { LoginController } from '../controllers/Auth/LoginController';
import { DeletePlayerController } from './../controllers/DeletePlayerController';
import { VerifyPlayerExistence } from '../controllers/Middlewares/VerifyPlayerExistence';
import { UpdatePlayerController } from './../controllers/UpdatePlayerController';
import { GetAllPlayersController } from './../controllers/GetAllPlayersController';
import { CreatePlayerController } from './../controllers/CreatePlayerController';
import { GetPlayerController } from '../controllers/GetPlayerController';
import { VerifyWeapon } from './../controllers/Middlewares/VerifyWeapon';
import { VerifyRole } from './../controllers/Middlewares/VerifyRole';
import { VerifyPlayerStructure } from './../controllers/Middlewares/VerifyPlayerStructure';
import { Router } from 'express';

const main = Router();
const player = Router();
const login = Router();

main
  .route('/')
  .get((_req, res) => res.status(200).json('it\'s alive!'));

player
  .route('/player/:id')
  .get(new GetPlayerController().handle)
  .put(
    new VerifyPlayerExistence().handle,
    new VerifyPlayerStructure().handle,
    new VerifyRole().handle,
    new VerifyWeapon().handle,
    new UpdatePlayerController().handle,
  )
  .delete(
    new VerifyPlayerExistence().handle,
    new DeletePlayerController().handle,
  );

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
  );

login
  .route('/login')
  .post(
    new LoginController().handle,
  )

export { main, player, login };
