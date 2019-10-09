import request from 'supertest';

import { App } from '../../app';

let app: App;
beforeAll(() => {
    app = new App('8081');
    app.initRoutes();
    app.initApp();
});

describe('Project test', () => {
    test('project get all', () =>
        request(app)
            .get('/project')
            .expect(200));
});
