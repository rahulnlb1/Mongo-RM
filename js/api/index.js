"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Express = require("express");
const router = Express.Router();
require('./routes/standup')(router);
require('./routes/projects')(router);
require('./routes/team')(router);
module.exports = router;
//# sourceMappingURL=index.js.map