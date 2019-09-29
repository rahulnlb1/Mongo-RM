import * as Express from "express";

module.exports = function (router: Express.Router) {
    router.get('/projects', (req: Express.Request, res: Express.Response): void => {
        res.json({"body": "In Projects"});
     });
}