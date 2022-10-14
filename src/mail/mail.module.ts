import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import {MailerModule} from "@nestjs-modules/mailer";
import {EjsAdapter} from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";

@Module({
  imports: [MailerModule.forRoot({
    transport: {
      host: "smtp.gmail.com",
      secure: false,
      auth: {
        user: 'bakirovartem69@gmail.com',
        pass: "nuncarendirse666",
      },
    },
    defaults: {
      from: "'No-Reply-KinoHub' <noreply@kinoHub.com>",
    },
  })],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
