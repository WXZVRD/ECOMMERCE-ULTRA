import {Controller, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}


    @Post('login')
    async login(): Promise<string> {
        return this.authService.login()
    }

    @Post('register')
    async register(): Promise<string> {
        return this.authService.register()
    }
}