import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from 'src/app/app.controller';
import { AppService } from 'src/app/app.service';
import getTypeOrmModuleOptions from 'src/config/db.config';
import envConfig from 'src/config/env.config';
import { ArticlesModule } from 'src/features/articles';
import { AuthModule } from 'src/features/auth';
import { CategoriesModule } from 'src/features/categories';
import { FileUploadModule } from 'src/features/file-upload';
import { LocationModule } from 'src/features/locations';
import { UsersModule } from 'src/features/users';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      cache: true,
      isGlobal: true,
    }),
    ThrottlerModule.forRoot({
      throttlers: [
        {
          // 20 requests per 10 seconds to protected endpoints
          ttl: 10000,
          limit: 20,
        },
      ],
    }),
    TypeOrmModule.forRoot(getTypeOrmModuleOptions()),
    UsersModule,
    AuthModule,
    FileUploadModule,
    CategoriesModule,
    ArticlesModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
