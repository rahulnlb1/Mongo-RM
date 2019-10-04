import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as Morgan from 'morgan';

import { PORT } from './modules/util/config';
import { BasePath as ProjectBasePath, projectRouter } from './modules/project';

export class Server {
    server: Express.Application;
    port: string;

    constructor() {
        this.server = Express();
        this.port = PORT;
        this.config();
        this.defaultRoute();
    }

    config = () => {
        this.server.use(Morgan('combined'));
        this.server.use(BodyParser.urlencoded({ extended: false }));
        this.server.use(BodyParser.json());
    };

    defaultRoute = () => {
        this.server.get('/', (req, res) => {
            res.json({ message: 'Welcome to RM!!!' });
        });
    };

    initRouter = () => {
        this.server.use(ProjectBasePath, projectRouter);
    };

    startApp = () => {
        this.initRouter();
        this.server.listen(this.port, () => {
            console.log(`Listening to port ${this.port}`);
        });
    };
}
