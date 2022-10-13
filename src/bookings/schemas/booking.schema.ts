import {SchemaFactory, Schema, Prop} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type BookingDocument = Booking & Document;

class Ordertype{
    sits : {
        Loge: number,
        Parkett: number,
    }
    price: number
}

@Schema()
export class Booking{
    @Prop({required: true})
    name: string

    @Prop({required: true})
    email: string

    @Prop({required: true})
    order: Ordertype
}

export const bookingSchema = SchemaFactory.createForClass(Booking);

