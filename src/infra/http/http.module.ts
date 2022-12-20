/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { SendNotification } from "@application/use-cases/send-notification";
import { DatabaseModule } from "../database/database.module";
import { NotificationsContrller } from "./controllers/notifications.controller";
import { CancelNotification } from "@application/use-cases/cancel-notification";
import { CountRecipientNotifications } from "@application/use-cases/count-recipient-notifications";
import { GetRecipientNotifications } from "@application/use-cases/get-recipient-notifications";
import { ReadNotification } from "@application/use-cases/read-notification";
import { UnreadNotification } from "@application/use-cases/unread-notification";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsContrller],
    providers:[
        SendNotification,
        CancelNotification,
        CountRecipientNotifications,
        GetRecipientNotifications,
        ReadNotification,
        UnreadNotification,
        
    ],
})

export class HttpModule {}