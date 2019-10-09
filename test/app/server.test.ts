import * as Express from 'express';

import { Server } from '../../app/server';

let server: Server;

beforeAll(() => {
    server = new Server('8081');
});

describe('Server test', () => {
    test('server start', async () => {
        const spy = jest.spyOn(global.console, 'log');

        server.startApp();
        expect(spy).toHaveBeenCalled();
        //expect(console.log.mock.calls[0][0]).toBeUndefined();
    });
});
