import * as Express from "express";
import { Standup } from '../../models/standup';

module.exports = (router: Express.Router): void => {
    router.get('/standup', (req: Express.Request, res: Express.Response): void => {
        res.json({"body": "In StandUps"});
     });

     router.post('/standup', (req: Express.Request, res: Express.Response): void => {
        console.log(req.body);
        let note = new Standup(req.body);
        note.save( (err: any, note: any) => {
            if(err) {
                return res.status(400).json(err);
            }
            res.status(200).json(note);
        })
     });
}