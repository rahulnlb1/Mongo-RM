import * as Mongoose from 'mongoose';

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
        this.initDB();
    };

    public getServer = (): Server => {
        return this.server;
    };

    public initRoutes = (): void => {
        this.server.attachMiddlewares();
        this.server.addRouter(HealthBasePath, healthRouter);
        this.server.addRouter(ProjectBasePath, projectRouter);
    };

    private initServer = (): void => {
        this.server.startApp();
    };

    private initDB = () => {
        Mongoose.connect(this.dbHost, { useNewUrlParser: true });
        const db = Mongoose.connection;

        db.on('error', console.error.bind(console, 'connection: error'));
        db.on('open', () => {
            console.log('Mongo Connected');
            this.initServer();
        });
    };
}
