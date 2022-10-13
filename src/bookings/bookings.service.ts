import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Booking, BookingDocument} from "./schemas/booking.schema";
import {Model} from "mongoose";

@Injectable()
export class BookingsService {

    constructor(
        @InjectModel(Booking.name)
        private BookingModel: Model<BookingDocument>
    ) {}

    async create(body){
        const newBooking = new this.BookingModel(body);
        await newBooking.save();
    }

    async getAll(){
        const bookings = await this.BookingModel.find();
        return bookings;
    }
}
