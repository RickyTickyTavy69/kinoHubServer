import { Injectable } from '@nestjs/common';
import { MailerService } from "@nestjs-modules/mailer";

@Injectable()
export class MailService {
    constructor(private mailerService: MailerService) {}

    async sendUserConfirmation(user, email) {
        try{
            await this.mailerService.sendMail({
                to: email,
                subject: "Thank you for placing order!",
                text: "Whatsupp man, thank you for buy sits in our Kino! We hope you enjoy the show"
            })
        } catch(e){
            console.error("error sending mail", e);
        }

    }
}
