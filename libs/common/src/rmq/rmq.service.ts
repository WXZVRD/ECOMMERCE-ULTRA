import {Injectable} from '@nestjs/common';
import {RmqOptions, Transport} from "@nestjs/microservices";
import {ConfigService} from "@nestjs/config";

@Injectable()
export class RmqService {
    constructor(
        private readonly configService: ConfigService,
    ) {
    }
    getOptions(queue: string, noAck = false): RmqOptions {
        return {
            options: {
                urls: [this.configService.getOrThrow<string>('RABBIT_MQ_URI')],
                queue: this.configService.getOrThrow<string>(`RABBIT_MQ_${queue}_QUEUE`),
                noAck,
                persistent: true
            },
            transport: Transport.RMQ
        }
    }
}
