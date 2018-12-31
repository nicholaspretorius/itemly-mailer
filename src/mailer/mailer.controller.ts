import { Controller, Inject } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller('mailer')
export class MailerController {

    constructor(@Inject('MailerProvider') private readonly mailerProvider) {}

    @MessagePattern({ cmd: 'register' })
    async register(payload: any): Promise<any> {

        const response = await this.send(payload);

        // tslint:disable-next-line: no-console
        console.log('Response: ', response);

        if (response.accepted) {
            return {
                message: 'success',
                data: payload,
            };
        } else {
            return {
                message: 'failed',
                data: [],
            };
        }
    }

    private async send(payload): Promise<any> {
        return await this.mailerProvider.sendMail({
            to: payload.to,
            from: 'noreply@itemly.com',
            subject: payload.subject,
            text: payload.message,
            html: `<h3>${payload.message}</h3>`,
        });
    }
}
