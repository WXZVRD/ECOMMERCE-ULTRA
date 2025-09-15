import {Module} from "@nestjs/common";
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import {getDbConfig} from "./configs";

@Module({
    imports: [ ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: './apps/auth-service/.env'
    }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getDbConfig,
        }),],
    controllers: [AuthController],
    providers: [AuthService],
})
export class AuthModule{}