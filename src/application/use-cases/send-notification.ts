/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notification-repository";

/* eslint-disable prettier/prettier */
interface sendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification;
}

@Injectable()
 export class SendNotification {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(request: sendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category} = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category,
        });

        await this.notificationsRepository.create(notification);

        return {
            notification,
        };

    }

}