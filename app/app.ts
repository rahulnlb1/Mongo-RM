import * as Mongoose from 'mongoose';

import { DB_HOST } from './modules/util/config';
import { Server } from './server';

export class App {
    server: Server;
    dbHost: string;
    db = Mongoose.Connection;

    constructor() {
        this.server = new Server();
        this.dbHost = DB_HOST;
    }

    public initApp = () => {
        this.initDB();
    };

    public getServer = (): Server => {
        return this.server;
    };

    private initServer = () => {
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
