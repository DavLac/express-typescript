import express, { Express } from 'express';
import morgan from 'morgan';
import { entitiesRouter } from './controller/entitiesController';
import { elementsRouter } from './controller/elementsController';
import { fileStreamRouter } from './stream/fileStreamController';
import { eventsRouter } from './event/eventController';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/entities', entitiesRouter);
app.use('/api/v1/elements', elementsRouter);
app.use('/api/v1/stream-file', fileStreamRouter);
app.use('/api/v1/events', eventsRouter);

export default app;
