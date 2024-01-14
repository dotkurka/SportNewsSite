import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

import envConfig from 'src/config/env.config';

const { database } = envConfig();

const getTypeOrmModuleOptions = (): TypeOrmModuleOptions => ({
  type: 'postgres',
  autoLoadEntities: true,
  synchronize: false,
  migrationsRun: true,
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTransactionMode: 'each',
  migrationsTableName: 'migration',
  logging: ['query', 'error'],
  ...database,
});

export default getTypeOrmModuleOptions;
