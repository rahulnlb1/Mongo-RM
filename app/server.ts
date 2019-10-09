import * as Http from 'http';
import * as Express from 'express';
import * as BodyParser from 'body-parser';
import * as Morgan from 'morgan';

import { PORT } from './modules/util/config';

export class Server {
    server: Express.Application;
    port: string;
    private _server: Http.Server | null;

    constructor(port: string = PORT) {
        this.server = Express();
        this.port = port;
        this._server = null;
    }

    attachMiddlewares = (): void => {
        this.server.use(Morgan('combined'));
        this.server.use(BodyParser.urlencoded({ extended: false }));
        this.server.use(BodyParser.json());
    };

    addRouter = (basePath: string, routerInstance: Express.Router): void => {
        this.server.use(basePath, routerInstance);
    };

    start = (): Promise<string> => {
        return new Promise((resolve: (message: string) => void) => {
            this._server = this.server.listen(this.port, () => {
                const message = `Listening to port ${this.port}`;
                console.log(message);
                resolve(message);
            });
        });
    };

    /**
     * Shutdown method is very important in an application. Many app developers forget about this little gem.
     * This gives you control to gracefully shutdown the web server to stop receiving requests.
     *
     * It helps to avoid zombie processes and memory leaks.
     */
    shutdown() {
        return new Promise((resolve: () => void) => {
            if (this._server) {
                this._server.close(() => {
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }
}
