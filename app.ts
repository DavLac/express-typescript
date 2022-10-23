import express, { Express } from 'express';
import morgan from 'morgan';
import { entitiesRouter } from './src/controller/entitiesController';
import { elementsRouter } from './src/controller/elementsController';
import dotenv from 'dotenv';

dotenv.config();
const app: Express = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/entities', entitiesRouter);
app.use('/api/v1/elements', elementsRouter);

export default app;
