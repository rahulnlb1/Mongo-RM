import { env } from "process";
import * as Express from "express";

const app: Express.Application = Express();
const port: string = env.PORT || '3000';

const api = require('./api');

app.use('/api', api);

app.get('/', (req, res) => {
    res.json({"body": "I got it"});
});

app.listen(port, () => {    
    console.log(`Listening to port ${port}`);
});

