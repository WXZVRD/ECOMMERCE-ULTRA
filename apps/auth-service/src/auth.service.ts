import {Injectable, Logger} from "@nestjs/common";

interface IAuthService {
    login(): string;
    register(): string;
}

@Injectable()
export class AuthService implements IAuthService{
    private readonly logger: Logger = new Logger(AuthService.name);
    constructor() {}

    login(): string {
        this.logger.log('Ping to login route')
        return 'this is login route'
    }

    register(): string {
        this.logger.log('Ping to register route')
        return 'this is register route'
    }
}