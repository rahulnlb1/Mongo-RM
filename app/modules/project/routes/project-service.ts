import { Request, Response } from 'express';

import { Project as ProjectInteface } from '../interface';
import { ProjectModel } from '../models'

export class ProjectService{
    
    private projectModel: ProjectModel;    

    constructor() {
        this.projectModel = ProjectModel.getInstance();     
    }

    public create( req: Request, res: Response ) {
       const data = new (this.projectModel.getModel())(req.body);
       data.save( (err: any, project: any) => {
        if(err) {
            return res.status(400).json(err);
        }
        res.status(200).json(project);
    });
    }

    public get( req: Request, res: Response ) {       
        this.projectModel.getModel().find( {}, (err: any, projects: any) => {
         if(err) {
             return res.status(400).json(err);
         }
         res.status(200).json(projects);
     });
     }

     public getById( req: Request, res: Response ) {       
        this.projectModel.getModel().find( { ID : req.params.projectID }, (err: any, projects: any) => {
         if(err) {
             return res.status(400).json(err);
         }
         res.status(200).json(projects);
     });
     }

     public update( req: Request, res: Response ) {
        const data = new (this.projectModel.getModel())(req.body);
        data.updateOne( data, (err: any, project: any) => {
         if(err) {
             return res.status(400).json(err);
         }
         res.status(200).json(project);
     });
     }

     public delete( req: Request, res: Response ) {        
        this.projectModel.getModel().deleteOne( {ID: req.params.projectID}, (err: any) => {
         if(err) {
             return res.status(400).json(err);
         }
         res.status(200);
     });
     }
 
}