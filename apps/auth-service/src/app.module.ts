import { Module } from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {getDbConfig} from "./configs";

@Module({
  imports: [
      ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: './apps/auth-service/.env'
      }),
      TypeOrmModule.forRootAsync({
          imports: [ConfigModule],
          inject: [ConfigService],
          useFactory: getDbConfig,
      })
  ],
})
export class AppModule {}
