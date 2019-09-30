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

    private  create = (req: Request, res: Response): void => {              
        this.service.create(req.body)
        .then( data => {            
            res.status(200).json( data );
        } )
        .catch( err => res.status(400).json(err) );         
    }

    private update = (req: Request, res: Response): void => {
        this.service.update(req.body)
        .then( data => {            
            res.status(200).json( data );
        } )
        .catch( err => res.status(400).json(err) ); 
    }

    private delete = (req: Request, res: Response): void => {
        this.service.delete(req.params.projectID)
        .then( data => {            
            res.status(200).json( data );
        } )
        .catch( err => res.status(400).json(err) ); 
    } 

    private get = (req: Request, res: Response): void => {
        this.service.get()
        .then( data => {            
            res.status(200).json( data );
        } )
        .catch( err => res.status(400).json(err) ); 
    } 

    private getByID = (req: Request, res: Response): void => {
        this.service.getById(req.params.projectID)
        .then( data => {            
            res.status(200).json( data );
        } )
        .catch( err => res.status(400).json(err) ); 
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