import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PublisherModule } from './publisher/publisher.module';
import { MessagingController } from './publisher/messaging.controller';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [PublisherModule, AmqpConnection],
  controllers: [AppController, MessagingController],
  providers: [AppService],
})
export class AppModule {}
