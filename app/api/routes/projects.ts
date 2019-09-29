import * as Express from "express";
import { Project } from '../../models/project';

module.exports = (router: Express.Router): void => {
    router.get('/projects', (req: Express.Request, res: Express.Response): void => {
        res.json({"body": "In Projects"});
     });
     
     router.post('/projects', (req: Express.Request, res: Express.Response): void => {
        let note = new Project(req.body);
        note.save( (err: any, note: any) => {
            if(err) {
                return res.status(400).json(err);
            }
            res.status(200).json(note);
        })
     });
}