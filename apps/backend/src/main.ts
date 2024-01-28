import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/app/app.module';
import envConfig from 'src/config/env.config';

const { port } = envConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  app.setGlobalPrefix('api', {
    exclude: [
      { path: 'uploads/:foo*', method: RequestMethod.ALL },
      { path: '', method: RequestMethod.GET },
    ],
  });

  await app.listen(port);
}
bootstrap();
