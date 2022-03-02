import { Express, Request, Response } from 'express'
import { devices } from './db.utils';

const routes = (app: Express) => {
    app.get('/', (req: Request, res: Response) => {
        res.send('Server is alive!');
    })

    app.get('/api/v1/devices', (req: Request, res: Response) => {
        res.send(devices)
    })

    app.get('/api/v1/devices/:id', (req: Request, res: Response) => {
        res.send(`/api/v1/devices/${req.params.id}`)
    })

    app.get('/api/v1/refresh', (req: Request, res: Response) => {
        res.send('/api/v1/refresh')
    })
}

export default routes;