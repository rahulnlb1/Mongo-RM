import { Router, Request, Response } from "express";

import { ProjectService } from "./project-service";

export class ProjectRoute {
    
    public static BasePath: string = '/project';

    private router: Router;
    private service: ProjectService;
    
    constructor() {
        this.router = Router();
        this.service = new ProjectService();
        this.createRoutes()
    }

    private create = (req: Request, res: Response): void => {
        this.service.create(req, res);
    }

    private update = (req: Request, res: Response): void => {
        this.service.update(req, res);
    }

    private delete = (req: Request, res: Response): void => {
        this.service.delete(req, res);
    } 

    private get = (req: Request, res: Response): void => {
        this.service.get(req, res);
    } 

    private getByID = (req: Request, res: Response): void => {
        this.service.getById(req, res);
    } 

    public createRoutes() {
        this.router.post('/', this.create );
        this.router.put('/:projectID', this.update );
        this.router.delete('/:projectID', this.delete );
        this.router.get('/', this.get );
        this.router.get('/:projectID', this.getByID );                
    }
    
    public getRouter(): Router {
        return this.router;
    }
}