import { UnreadNotification } from '@application/use-cases/unread-notification';
import { CancelNotification } from './../../application/use-cases/cancel-notification';
import { Module } from "@nestjs/common";

import { DatabaseModule } from './../database/database.module';
import { SendNotification } from '@application/use-cases/send-notification';
import { NotificationsController } from './controller/notifications.controller';
import { ReadNotification } from '@application/use-cases/read-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications';

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [
        SendNotification,
        CancelNotification,
        ReadNotification,
        UnreadNotification,
        GetRecipientNotification,
        CountRecipientNotification
    ] 
})
export class HttpModule {}