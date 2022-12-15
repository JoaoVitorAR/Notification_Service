import { Module } from "@nestjs/common";

import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../database/prisma/prisma.service';

@Module({
    providers: [
        PrismaService,
        {
            provide: NotificationsRepository,
            useClass: PrismaNotificationsRepository
        }
    ],
    exports: [NotificationsRepository]
})
export class DatabaseModule {}