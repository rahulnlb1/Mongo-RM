"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const process_1 = require("process");
const Express = require("express");
const app = Express();
const port = process_1.env.PORT || '3000';
const api = require('./api');
app.use('/api', api);
app.get('/', (req, res) => {
    res.json({ "body": "I got it" });
});
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
//# sourceMappingURL=app.js.map