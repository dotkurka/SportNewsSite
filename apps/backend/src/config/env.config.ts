import { registerAs } from '@nestjs/config';
import { config } from 'dotenv';

config();

const mapEnvValues = {
  bool: (envValue: string) => envValue === 'true',
  number: (envValue: string, defaultValue: number) => {
    const value = Number(envValue);

    return !envValue || Number.isNaN(value) ? defaultValue : value;
  },
};

const defaultAppPort = 3001;
const defaultDbPort = 5432;

const envConfig = registerAs('env', () => ({
  port: mapEnvValues.number(process.env.PORT || '', defaultAppPort),
  appName: process.env.APP_NAME || '',
  database: {
    host: process.env.DATABASE_HOST || '',
    port: mapEnvValues.number(process.env.DATABASE_PORT || '', defaultDbPort),
    username: process.env.DATABASE_USERNAME || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || '',
  },
}));

export default envConfig;
