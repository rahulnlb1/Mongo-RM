import { env } from "process";
import * as Express from "express";

const app = Express();
const port = env.PORT || 3000;

app.use(Express.static('dist'));

app.get('/', (req, res) => {
    res.json({"body": "I got it"});
});

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});

