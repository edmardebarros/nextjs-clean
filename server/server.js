import cors from 'cors';
import express from 'express';
import https from 'https';
import morgan from 'morgan';
import next from 'next';
import path from 'path';

// There's an error with imports
require('dotenv').config();

// `npm start` defaults to 'production' and its port to '80'
// `npm run dev` defaults to 'development' and its port to '3000'
const PORT = process.env.PORT || 3000;
// Set up initial Next.js
const app = next({
  dir: '.',
  dev: (process.env.NODE_ENV === 'development') ? true : false
});
const handle = app.getRequestHandler();
let server;

app.prepare().then(() => {
  server = express();
  server.use((req, res, next) => {
    next();
  });

  // System log depending on the environment
  server.use(morgan('dev'));

  return auth(app, server, {})
}).then(() => {

  server.use(cors());

  // Default catch-all error handler
  server.all('*', (req, res) => {
    return handle(req, res);
  })


  // No certification needed for HTTP on local server
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log(`\x1b[33m[${process.env.NODE_ENV}] HTTP listening on http://localhost:${PORT}\x1b[0m`);
  });
})
