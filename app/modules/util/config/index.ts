import { env } from 'process';

export class Config {
    public static DB_HOST: string = env.DB_HOST || '';
    public static PORT: string = env.PORT || '3000';
}
