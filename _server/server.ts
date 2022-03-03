import dotenv from 'dotenv'
dotenv.config({ path: `.env` })
import cors from 'cors';
import { Server } from 'socket.io';
import express from 'express';
import { socket } from './utils/socket.utils';
import routes from './utils/routes.utils';

const app = express();

const corsObject = { origin: process.env.ORIGIN, credentials: true }

app.use(cors(corsObject))

const server = app.listen(1337, () => console.log(`Listening on port ${1337} (http://localhost:${1337})`));

const io = new Server(server, { cors: corsObject, path: "/api/v1/refresh" });

routes(app);
socket({ io });