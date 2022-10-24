import express, { Router, Request, Response } from 'express';
import EventEmitter from 'events';

export const eventsRouter: Router = express.Router();

const eventEmitter = new EventEmitter();

eventsRouter.get('/sale', (req: Request, res: Response) => {
  console.log('Publish "newSale" event');
  eventEmitter.emit('newSale', {
    product: req.query.product,
    quantity: req.query.quantity,
  });
  res.end();
});

eventEmitter.on('newSale', (product) => {
  console.log(`Handle "newSale" event #1, product=${JSON.stringify(product)}`);
});

eventEmitter.on('newSale', (product) => {
  console.log(`Handle "newSale" event #2, product=${JSON.stringify(product)}`);
});
