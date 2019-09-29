import * as Express from "express";

module.exports = function (router: Express.Router) {
    router.get('/team', (req: Express.Request, res: Express.Response): void => {
        res.json({"body": "In Teams"});
     });
}