import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerController } from './mailer/mailer.controller';
import { MailerModule } from '@nest-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot(),
  ],
  controllers: [AppController, MailerController],
  providers: [AppService],
})
export class AppModule {}
