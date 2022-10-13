import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";

export type DashboardDocument = Dashboard & Document;

class reservedSits{
    numbers: []
    sits:{
        Loge: number,
        Parkett: number
    }
}

@Schema()
export class Dashboard{
    @Prop({required: true})
    turnover: number

    @Prop({required: true})
    reservedSits: reservedSits
}

export const dashboardSchema = SchemaFactory.createForClass(Dashboard);