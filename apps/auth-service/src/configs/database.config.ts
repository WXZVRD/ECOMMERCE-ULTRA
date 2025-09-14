import {ConfigService} from "@nestjs/config";
import {TypeOrmModuleOptions} from "@nestjs/typeorm";

export const getDbConfig = (config: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: config.getOrThrow<string>('POSTGRES_HOST') || 'localhost',
    port: +config.getOrThrow<string>('POSTGRES_PORT') || 5432,
    username: config.getOrThrow<string>('POSTGRES_USER'),
    password: config.getOrThrow<string>('POSTGRES_PASSWORD'),
    database: config.getOrThrow<string>('POSTGRES_DB'),
    autoLoadEntities: true,
    synchronize: true,
})