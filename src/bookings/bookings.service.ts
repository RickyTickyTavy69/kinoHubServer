import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Booking, BookingDocument} from "./schemas/booking.schema";
import {Model} from "mongoose";
import {MailerService} from "@nestjs-modules/mailer";
import {MailService} from "../mail/mail.service";

@Injectable()
export class BookingsService {

    constructor(
        @InjectModel(Booking.name)
        private BookingModel: Model<BookingDocument>,
        private mailService: MailService
    ) {}

    async create(body){
        await this.mailService.sendUserConfirmation(body.name, body.email);
        const newBooking = new this.BookingModel(body);
        await newBooking.save();
    }

    async getAll(){
        const bookings = await this.BookingModel.find();
        return bookings;
    }
}
