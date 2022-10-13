import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Dashboard, DashboardDocument} from "./schemas/dashboard.schema";
import {Model} from "mongoose";

@Injectable()
export class DashboardService {

    constructor(
        @InjectModel(Dashboard.name)
        private DashboardModel: Model<DashboardDocument>
    ) {}


    async update(body){

        const dashBoard = await this.DashboardModel.find();
        console.log("dashboard @ update", dashBoard);

        if(dashBoard.length){
            console.log("there is a dashboard already");
            const oldDashBoard = JSON.parse(JSON.stringify(dashBoard));
            console.log("old dashboard", oldDashBoard);
            console.log("old dashboard reserved", oldDashBoard.reservedSits);
            console.log("old dashboard turnover", oldDashBoard.turnover);
            const updateDashboard = {
                turnover: body.order.price + oldDashBoard[0].turnover,
                reservedSits: {
                    numbers : [...body.order.numbers, ...oldDashBoard[0].reservedSits.numbers],
                    sits: {
                        Loge: body.order.sits.Loge + oldDashBoard[0].reservedSits.sits.Loge,
                        Parkett: body.order.sits.Parkett + oldDashBoard[0].reservedSits.sits.Parkett,
                    }
                }
            }
            const newDashBoard = new this.DashboardModel(updateDashboard);
            await this.DashboardModel.findOneAndDelete();
            await newDashBoard.save();

        } else {
            const updateData = {
                turnover: body.order.price,
                reservedSits:{
                    numbers: body.order.numbers,
                    sits: body.order.sits,
                }
            }
            const newDashboard = new this.DashboardModel(updateData);
            await newDashboard.save();
        }


    }

    async getIt(){
        const dashboard = await this.DashboardModel.find();
        return dashboard;
    }

    async reset(){
        await this.DashboardModel.findOneAndDelete();
    }
}
