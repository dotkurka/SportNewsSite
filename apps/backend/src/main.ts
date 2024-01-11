import { NestFactory } from '@nestjs/core';

import { AppModule } from 'app.module';
import envConfig from 'config/env.config';

const { port } = envConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
