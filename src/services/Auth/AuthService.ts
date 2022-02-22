import { decode, TAlgorithm } from 'jwt-simple';
import { Session } from './Session';
require('dotenv').config();
export class AuthService {
  async execute(token: string) {
    const { JWT_SECRET } = process.env;
    if(!JWT_SECRET) return {type: 'invalid-secret'};
    const alg: TAlgorithm = 'HS512';

    let result: Session;

    try {
      result = decode(token, JWT_SECRET, false, alg);
    } catch (err) {
      return { type: 'invalid-token' };
    }

    return {
      type: 'valid',
      session: result,
    };
  }
}
