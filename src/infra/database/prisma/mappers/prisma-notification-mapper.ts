/* eslint-disable prettier/prettier */
import {Notification as RawNotification} from '@prisma/client';
import { Notification } from "@application/entities/notification";
import { Content } from '@application/entities/content';

export class PrismaNotificationMapper {
    static toPrisma( notification: Notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAT: notification.readAt,
            createdAT: notification.createdAt,

        };

    }

    static toDomain(raw: RawNotification ): Notification {
        return new Notification({
            category: raw.category,
            content: new Content(raw.content),
            recipientId: raw.recipientId,
            readAt: raw.readAT,
            canceledAt: raw.canceledAt,
            createdAt: raw.createdAT,
        }, raw.id,);

    }

}