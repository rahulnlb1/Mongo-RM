import { env } from 'process';

const DB_HOST: string = env.DB_HOST || '';
const PORT: string = env.PORT || '3000';

export { DB_HOST, PORT };
