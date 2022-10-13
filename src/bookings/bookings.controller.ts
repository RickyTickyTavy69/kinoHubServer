import {Body, Controller, Get, Post} from '@nestjs/common';
import {createBooking} from "./dto/booking.dto";
import {BookingsService} from "./bookings.service";
import {Booking} from "./schemas/booking.schema";

@Controller('bookings')
export class BookingsController {

    constructor(private readonly bookingsService: BookingsService) {}

    @Post("/create")
     async Create(@Body() body: createBooking){
        console.log("body @ create", body);
        await this.bookingsService.create(body);
        return({message: "das booking wurde erstellt"});
    }

    @Get("/getall")
    async GetAll(){
        const bookings = await this.bookingsService.getAll();
        return({bookings, message: "the bookings have been found"});
    }
}
