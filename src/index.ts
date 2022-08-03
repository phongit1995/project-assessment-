import express, { Express } from 'express';
import { createConnection } from 'typeorm';
import appRouter from './modules';
const app: Express = express();
createConnection()
  .then(() => {
    console.log('connect success db');
  })
  .catch(console.log);
app.use(express.json());
app.get('/health-check', (req, res) => {
  res.send('good');
});
app.use('/api/v1', appRouter);
const PORT: number = parseInt(process.env.PORT) || 3000;
app.listen(PORT, () => {
  console.log('app running success on port: ' + PORT);
});
