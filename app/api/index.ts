import * as Express from "express";

const router: Express.Router = Express.Router();

require('./routes/standup')(router);
require('./routes/projects')(router);
require('./routes/team')(router);

export const api = router;
