import { Router, Request, Response } from 'express';

import { ProjectService } from './project-service';

export class ProjectRoute {
    public static BasePath: string = '/project';

    private router: Router;
    private service: ProjectService;

    constructor() {
        this.service = new ProjectService();
    }

    private create = (req: Request, res: Response): void => {
        this.service
            .create(req.body)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.status(400).json(err));
    };

    private update = (req: Request, res: Response): void => {
        this.service
            .update(req.params.projectID, req.body)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.status(400).json(err));
    };

    private delete = (req: Request, res: Response): void => {
        this.service
            .delete(req.params.projectID)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.status(400).json(err));
    };

    private get = (req: Request, res: Response): void => {
        this.service
            .get()
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.status(400).json(err));
    };

    private getByID = (req: Request, res: Response): void => {
        this.service
            .getById(req.params.projectID)
            .then(data => {
                res.status(200).json(data);
            })
            .catch(err => res.status(400).json(err));
    };

    public getRouter = (): Router => {
        const router = Router();

        router.post('/', this.create);
        router.put('/:projectID', this.update);
        router.delete('/:projectID', this.delete);
        router.get('/', this.get);
        router.get('/:projectID', this.getByID);

        return router;
    };
}
