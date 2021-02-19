import { Module } from '@nestjs/common';
import { AmqpConnection, RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { MessagingService } from './message.service';
import { MessagingController } from './messaging.controller';

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri:
        'amqps://dirlzpas:58hFgT41y9SbGRYJIXbqVKnlUlUX3vP5@coyote.rmq.cloudamqp.com/dirlzpas',
    }),
    AmqpConnection,
  ],
  providers: [MessagingService],
  controllers: [MessagingController],
})
export class PublisherModule {}
