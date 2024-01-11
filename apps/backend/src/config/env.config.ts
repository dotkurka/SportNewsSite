import { registerAs } from '@nestjs/config';

const mapEnvValues = {
  bool: (envValue: string) => envValue === 'true',
  number: (envValue: string, defaultValue: number) => {
    const value = Number(envValue);

    return !envValue || Number.isNaN(value) ? defaultValue : value;
  },
};

const defaultAppPort = 3001;

const envConfig = registerAs('env', () => ({
  port: mapEnvValues.number(process.env.PORT || '', defaultAppPort),
}));

export default envConfig;
