import { getRepository } from 'typeorm';
import { encode, TAlgorithm } from 'jwt-simple';
import { User } from '../../entities/User';
import { Session } from './Session';
require('dotenv').config();

export class LoginService {
  async execute(user: { username:string, password:string }): Promise<string | Error> {
    const repository = getRepository(User);
    const secret: string | undefined = process.env.JWT_SECRET;
    if(typeof secret !== 'string')  return new Error('SECRETERROR');
    
    const loginUser = await repository.findOne({username: user.username})
    
    if(!loginUser) return new Error('User not found');
    if(user.password !== loginUser.password) return new Error('Invalid credentials');

    const alg: TAlgorithm = 'HS512';
    const session: Session = {
      id: loginUser.id,
      username: loginUser.username,
      issued: Date.now(),
      expires: Date.now() + (30 * 60 * 1000), // 30min
    }

    return encode(session, secret, alg);
  }
}