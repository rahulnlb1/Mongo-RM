import Mongoose from 'mongoose';

import { DB_HOST, PORT } from './modules/util/config';
import { BasePath as ProjectBasePath, projectRouter } from './modules/project';
import { BasePath as HealthBasePath, healthRouter } from './modules/health';
import { Server } from './server';

export class App {
    server: Server;
    dbHost: string;
    db = Mongoose.Connection;

    constructor(port: string = PORT) {
        this.server = new Server(port);
        this.dbHost = DB_HOST;
    }

    public initApp = () => {
        return Promise.all([this.initDB(), this.initServer()]);
    };

    public getServer = (): Server => {
        return this.server;
    };

    public initRoutes = (): void => {
        this.server.attachMiddlewares();
        this.server.addRouter(HealthBasePath, healthRouter);
        this.server.addRouter(ProjectBasePath, projectRouter);
    };

    /**
     * Return type from this method is not needed to be explicitly written, as it can be easily inferred by TS
     */
    private initServer = () => {
        return this.server.start();
    };

    private initDB = () => {
        return new Promise((resolve: () => void, reject: (error: Error) => void) => {
            Mongoose.connect(this.dbHost, { useNewUrlParser: true });
            const db = Mongoose.connection;
            db.on('error', (error: Error) => {
                console.error('connection: error');
                reject(error);
            });
            db.on('open', () => {
                console.log('Mongo Connected');
                resolve();
            });
        });
    };
}
