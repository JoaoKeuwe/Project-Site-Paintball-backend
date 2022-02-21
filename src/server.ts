import 'reflect-metadata';
import './database';
import express from 'express';
import { main, player } from './routes';

const app = express();

app.use(express.json());
app.use(main);
app.use(player)

app.listen(3000, () => {
  console.log('listening on PORT 3000')
});
