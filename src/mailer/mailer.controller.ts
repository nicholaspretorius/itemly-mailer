import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {

    @MessagePattern({ cmd: 'register' })
    async register(payload: any): Promise<any> {
        // tslint:disable-next-line: no-console
        console.log('Received!');
        return `Register email sent: ` + payload;
    }
}
