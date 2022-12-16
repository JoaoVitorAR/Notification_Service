import { KafkaConsumerService } from './infra/messaging/kafka/kafka-consumer.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions  } from '@nestjs/microservices'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  const kafkaConsumerService = app.get(KafkaConsumerService)

  app.connectMicroservice<MicroserviceOptions >({
    strategy: kafkaConsumerService,
  })

  await 
  await app.listen(3000);
}
bootstrap();
