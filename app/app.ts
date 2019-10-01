import * as Express from 'express';
import * as Mongoose from 'mongoose';
import * as BodyParser from 'body-parser';
import * as Morgan from 'morgan';

import { ProjectRoute } from './modules/project';
import { Config } from './modules/util/config';

const app: Express.Application = Express();
app.use(Morgan('combined'));
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to RM!!!' });
});

const projectRoute = new ProjectRoute();
app.use(ProjectRoute.BasePath, projectRoute.getRouter());

Mongoose.connect(Config.DB_HOST, { useNewUrlParser: true });
const db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection: error'));
db.on('open', () => {
    console.log('Mongo Connected');
    app.listen(Config.PORT, () => {
        console.log(`Listening to port ${Config.PORT}`);
    });
});
