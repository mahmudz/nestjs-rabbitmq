import { Controller } from '@nestjs/common';
import {AmqpConnection} from "@golevelup/nestjs-rabbitmq";

@Controller('messaging')
export class MessagingController {
    constructor(private readonly amqpConnection: AmqpConnection) {
    }
}
