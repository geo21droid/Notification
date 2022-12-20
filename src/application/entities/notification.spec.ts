/* eslint-disable prettier/prettier */
import { Content } from "./content";
import {Notification} from "./notification";

describe('Notification', () => {
    it(' should be able to create a notification', () => {
        const notification = new Notification({
            content: new Content('Nova solicitação de amizade.'),
            category: 'social',
            recipientId: 'example-recipient-id',
            
        });
    
        expect(notification).toBeTruthy();
    });
    
    /*it(' should be able to create a notification content', () => {
        expect(() => new Content('aaa')).toThrow();
    
       
    });
    
    it(' should be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    
       
    });*/
    

});
