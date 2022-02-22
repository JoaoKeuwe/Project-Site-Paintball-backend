export interface Session {
  id: number; // receberá o id o user
  username: string;
  issued: number; // Date.now() em ms
  expires: number; // Date.now() + 30min
}
