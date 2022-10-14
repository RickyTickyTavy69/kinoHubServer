import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Booking, bookingSchema} from "./schemas/booking.schema";
import { BookingsService } from './bookings.service';
import {MailModule} from "../mail/mail.module";

@Module({
    imports: [MongooseModule.forFeature([{name: "Booking", schema: bookingSchema}]), MailModule],
    controllers: [BookingsController],
    providers: [BookingsService]
})
export class BookingsModule {}
