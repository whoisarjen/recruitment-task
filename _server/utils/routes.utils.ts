import { Express, Request, Response } from 'express'
import { getAll } from './db.utils';

const routes = (app: Express) => {
    app.get('/', (req: Request, res: Response) => {
        res.send('Server is alive!');
    })

    app.get('/api/v1/devices', (req: Request, res: Response) => {
        res.send(getAll())
    })

    app.get('/api/v1/devices/:id', (req: Request, res: Response) => {
        res.send(`/api/v1/devices/${req.params.id}`)
    })

    app.get('/api/v1/refresh', (req: Request, res: Response) => {
        res.send('/api/v1/refresh')
    })
}

export default routes;