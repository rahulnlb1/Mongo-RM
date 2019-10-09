import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as Morgan from 'morgan';

import { PORT } from './modules/util/config';

export class Server {
    server: Express.Application;
    port: string;

    constructor(port: string = PORT) {
        this.server = Express();
        this.port = port;
    }

    attachMiddlewares = (): void => {
        this.server.use(Morgan('combined'));
        this.server.use(BodyParser.urlencoded({ extended: false }));
        this.server.use(BodyParser.json());
    };

    addRouter = (basePath: string, routerInstance: Express.Router): void => {
        this.server.use(basePath, routerInstance);
    };

    startApp = (): void => {
        this.server.listen(this.port, () => {
            console.log(`Listening to port ${this.port}`);
        });
    };
}
