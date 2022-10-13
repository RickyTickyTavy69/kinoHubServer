import { Module } from '@nestjs/common';
import { DashboardController } from './dashboard.controller';
import { DashboardService } from './dashboard.service';
import {MongooseModule} from "@nestjs/mongoose";
import {Dashboard, dashboardSchema} from "./schemas/dashboard.schema";

@Module({
  imports: [MongooseModule.forFeature([{name: "Dashboard", schema: dashboardSchema}])],
  controllers: [DashboardController],
  providers: [DashboardService]
})
export class DashboardModule {}
