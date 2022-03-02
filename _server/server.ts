import express, { Request, Response } from 'express';

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Server is alive!');
})

app.get('/api/v1/devices', (req: Request, res: Response) => {
    res.send('/api/v1/devices')
})

app.get('/api/v1/devices/:id', (req: Request, res: Response) => {
    res.send(`/api/v1/devices/${req.params.id}`)
})

app.get('/api/v1/refresh', (req: Request, res: Response) => {
    res.send('/api/v1/refresh')
})

app.listen(1337, () => {
    console.log('Server is listening on port 1337!');
})