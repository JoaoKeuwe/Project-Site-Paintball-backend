import { Request, Response } from 'express';
import { LoginService } from '../../services/Auth/LoginService';

interface Login {
  username: string;
  password: string;
}

export class LoginController {
  async handle(req: Request, res: Response) {
    try {
      const user: Login = req.body;

      const service = new LoginService();

      const result: string | Error = await service.execute(user);

      if (result instanceof Error && result.message === 'SECRETERROR')
        throw new Error("Can't find secret");

      if (result instanceof Error) return res.status(400).json(result.message);

      return res.status(200).json(result);
    } catch (err) {
      console.log(err);
      return res.status(500).json('internal server error');
    }
  }
}
