import { Server } from '../../app/server';

describe('Server test', () => {
    let server: Server;

    beforeAll(() => {
        server = new Server('8081');
    });

    afterAll(async () => {
        /**
         * Since started the server in a test, it's our responsibility to shutdown the server after all tests are run
         * Otherwise, Jest would still keep some objects in memory and can never exit with '0' code thinking there are other tests to run, unless killed otherwise.
         */
        await server.shutdown();
    });

    it('spins up a new server on 8081 port', async () => {
        const consoleSpy = jest.spyOn(console, 'log');

        /**
         * This is called assertion planning.
         * It ensures that test wait till at least two assertions are made.
         *
         * Here it signifies that we are sure that there would be 2 assertions made, if not, mark this test as fail.
         *
         * This is important so that if server is not able to start and throws some error,
         * this test can tell us that there is some problem with the server.
         */
        expect.assertions(2);

        const serverMessage = await server.start();

        expect(serverMessage).toBe('Listening to port 8081');
        expect(consoleSpy).toHaveBeenCalledWith(serverMessage);

        consoleSpy.mockRestore();
    });
});
