import { DatabaseModule } from './../database/database.module';
import { SendNotification } from './../../application/use-cases/send-notification';
import { NotificationsController } from './controller/notifications.controller';
import { Module } from "@nestjs/common";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification] 
})
export class HttpModule {}