import dotenv from 'dotenv'
dotenv.config({ path: `.env` })
import cors from 'cors';
import { Server } from 'socket.io';
import express from 'express';
import { socket } from './utils/socket.utils';
import routes from './utils/routes.utils';

const app = express();
app.use(cors({ origin: process.env.ORIGIN }))

const server = app.listen(1337, () => console.log(`Listening on port ${1337} (http://localhost:${1337})`));

const io = new Server(server, { cors: { origin: process.env.ORIGIN }, path: "/api/v1/refresh" });

routes(app);
socket({ io });