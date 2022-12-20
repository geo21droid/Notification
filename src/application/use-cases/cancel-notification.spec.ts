/* eslint-disable prettier/prettier */

import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notification-repository";
import { CancelNotification } from "./cancel-notification";
import { NotificationNotFound } from "./errors/notification-not-found";





describe('Send notification', () => {

    it('should be able to send a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = makeNotification()
        

        await  notificationsRepository.create(notification);

        await  cancelNotification.execute({
            notificationId: notification.id,
        });


        expect(notificationsRepository.notifications[0].canceledAt).toEqual(expect.any(Date),);
        
  
    });

    it('should not be cancel a notification when it does not exist', () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        

        expect(() => {
            return  cancelNotification.execute({
                notificationId: 'fake-notification-id',
            });
        }).rejects.toThrow(NotificationNotFound);


    })
});