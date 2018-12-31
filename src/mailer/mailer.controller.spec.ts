import { Test, TestingModule } from '@nestjs/testing';
import { MailerController } from './mailer.controller';

describe('Mailer Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MailerController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MailerController = module.get<MailerController>(MailerController);
    expect(controller).toBeDefined();
  });
});
