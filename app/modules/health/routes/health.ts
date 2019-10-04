import { Router, Request, Response } from 'express';

export class HealthRoute {
    private router: Router;

    constructor() {}

    private get = (req: Request, res: Response): void => {
        res.status(200).json({ health: 'OK' });
    };

    public getRouter = (): Router => {
        const router = Router();

        router.get('/', this.get);

        return router;
    };
}
const BasePath = '/health';
const healthRoute = new HealthRoute();
const healthRouter = healthRoute.getRouter();
export { BasePath, healthRouter };
