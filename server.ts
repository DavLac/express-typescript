import { Request, Response } from 'express';
import app from './src/app';
import Logger from './src/config/logger';

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'OK',
    app: 'Express.js Entity app',
  });
});

app.listen(port, () => {
  Logger.info(`[server]: Server is running at https://localhost:${port}`);
});
