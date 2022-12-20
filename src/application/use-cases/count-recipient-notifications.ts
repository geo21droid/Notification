/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notification-repository";


/* eslint-disable prettier/prettier */
interface CountRecipientNotificationsRequest {
    recipientId: string;
}

interface CountRecipientNotificationsResponse {
    count: number;

};

@Injectable()
 export class CountRecipientNotifications {
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(request: CountRecipientNotificationsRequest): Promise<CountRecipientNotificationsResponse> {
        const { recipientId } = request;

        const count = await this.notificationsRepository.countManyByRecipientId(recipientId);


        return {
            count,
        };


    }

}