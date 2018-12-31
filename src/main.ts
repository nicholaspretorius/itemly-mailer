import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });
  // tslint:disable-next-line:no-console
  await app.listen(() => console.log('Microservice listening!'));
}
bootstrap();
