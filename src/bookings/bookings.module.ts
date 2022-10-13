import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Booking, bookingSchema} from "./schemas/booking.schema";
import { BookingsService } from './bookings.service';

@Module({
    imports: [MongooseModule.forFeature([{name: "Booking", schema: bookingSchema}])],
    controllers: [BookingsController],
    providers: [BookingsService]
})
export class BookingsModule {}
