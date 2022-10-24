import express, { Router, Request, Response, NextFunction } from 'express';
import fs from 'fs';

export const fileStreamRouter: Router = express.Router();

fileStreamRouter.get('/write/lines/:lines', (req: Request, res: Response) => {
  let data = [];
  const lines: Number = +req.params.lines;
  for (let i = 0; i < lines; i++) {
    console.log(`Writing data ${i}...`);
    data.push({
      id: Math.floor(Math.random() * 999999),
      uuid: Math.random().toString(36).slice(2),
      message: Math.random().toString(36).slice(2),
    });
  }
  fs.writeFile('./src/stream/data.json', JSON.stringify(data), () => {
    res.status(200).send();
  });
});

fileStreamRouter.get('/read', (req: Request, res: Response) => {
  /*
    WITHOUT STREAM
    fs.readFile('./src/stream/data.json', (err, data) => {
    if (err) console.log(err);
    res.status(200).end(data);
  });*/

  const readable = fs.createReadStream('./src/stream/data.json');
  readable.on('data', (chunk) => {
    res.write(chunk);
  });
  readable.on('end', () => {
    res.end();
  });
});
