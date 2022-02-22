import { AuthService } from './../../services/Auth/AuthService';
import { Request, Response, NextFunction } from 'express';

export class AuthController {
  async handle(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization;
      if(!token) return res.status(401).json('Unauthorized')

      const service = new AuthService();
      
      const decode = await service.execute(token);

      if(decode instanceof Error) return res.status(401).json('Unauthorized');
      if (!decode.session) return res.status(401).json('Unauthorized');

      if(decode.session.expires < Date.now()) return res.status(498).json('Token expired');

      next();
    } catch (err) {
      console.log(err);
      return res.status(500).json('internal server error');
    }
  }
}
