import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingsModule } from './bookings/bookings.module';
import {MongooseModule} from "@nestjs/mongoose";
import { DashboardModule } from './dashboard/dashboard.module';


@Module({
  imports: [BookingsModule, MongooseModule.forRoot("mongodb://Artem69:12345@ac-qyconjd-shard-00-00.vhxpjpj.mongodb.net:27017,ac-qyconjd-shard-00-01.vhxpjpj.mongodb.net:27017,ac-qyconjd-shard-00-02.vhxpjpj.mongodb.net:27017/?ssl=true&replicaSet=atlas-jbzkzl-shard-0&authSource=admin&retryWrites=true&w=majority"), DashboardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
