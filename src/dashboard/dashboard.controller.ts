import {Body, Controller, Get, Post} from '@nestjs/common';
import {DashboardService} from "./dashboard.service";

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardservice: DashboardService) {}

    @Get("getIt")
    async getIt(){
        const dashboard = await this.dashboardservice.getIt();
        return{data: dashboard};
    }

    @Post("update")
    async updateDashboard(@Body() body){
        console.log("body @ updateDashboard", body);
        await this.dashboardservice.update(body);
    }

    @Get("reset")
    async reset(){
        await this.dashboardservice.reset();
    }
}
