import express, { Router, Request, Response, NextFunction } from 'express';

export const entitiesRouter: Router = express.Router();

entitiesRouter.use((req: Request, res: Response, next: NextFunction) => {
  console.log('Middleware entities');
  next();
});

entitiesRouter.get('/:id', (req: Request, res: Response) => {
  res.status(200).json({
    message: `Param = ${req.params.id}`,
  });
});
