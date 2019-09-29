import * as Express from "express";
import { TeamMember } from '../../models/teamMember';

module.exports = (router: Express.Router): void => {
    router.get('/team', (req: Express.Request, res: Express.Response): void => {
        res.json({"body": "In Teams"});
     });
     
     router.post('/team', (req: Express.Request, res: Express.Response): void => {
        let note = new TeamMember(req.body);
        note.save( (err: any, note: any) => {
            if(err) {
                return res.status(400).json(err);
            }
            res.status(200).json(note);
        })
     });
}