import axios from 'axios';
import mongoose from 'mongoose';

import { App } from '../../app';

describe('Project test', () => {
    let app: App;
    let httpClient = axios.create({
        baseURL: 'http://localhost:8081',
    });

    beforeAll(async () => {
        app = new App('8081');
        app.initRoutes();
        await app.initApp();
    });

    afterAll(async () => {
        await app.getServer().shutdown();
        await mongoose.connection.close();
    });

    it('project get all', async () => {
        expect.assertions(1);

        const response = await httpClient.get('/project');

        expect(response.status).toBe(200);
    });
});
