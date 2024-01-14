import { NestFactory } from '@nestjs/core';

import { AppModule } from 'src/app/app.module';
import envConfig from 'src/config/env.config';

const { port } = envConfig();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
