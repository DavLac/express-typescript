import express, { Router, Request, Response, NextFunction } from 'express';

export const elementsRouter: Router = express.Router();

elementsRouter.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware entities');
  next();
});

elementsRouter.get('/:id', (req: Request, res: Response) => {
  res.status(200).json({
    message: `Param = ${req.params.id}`,
  });
});
