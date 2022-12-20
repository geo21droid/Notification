/* eslint-disable prettier/prettier */
import { Content } from "./content";

describe('Notification content', () => {
    it(' should be able to create a notification content', () => {
        const content = new Content('voce recebeu um solitacao de amizader');
    
        expect(content).toBeTruthy();
    });
    
    it(' should be able to create a notification content', () => {
        expect(() => new Content('aaa')).toThrow();
    
       
    });
    
    it(' should be able to create a notification content with more than 240 characters', () => {
        expect(() => new Content('a'.repeat(241))).toThrow();
    
       
    });
    

});



