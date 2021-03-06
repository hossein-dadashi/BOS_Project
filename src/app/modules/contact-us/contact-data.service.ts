import { Injectable } from '@angular/core';
import { ContactInformationModel } from './contact-info.model';

@Injectable({
  providedIn: 'root'
})
export class ContactDataService {

  constructor() { }
 
  public getContactUsInformation(): ContactInformationModel[] {

    // If there was an api , then this function had to be some changed . 
    // and also should return api response . so we could make our own deserialize 
    // to map backend respons to our model .

    return [
      {
        title: 'Phone',
        icon: '',
        address: '1-234-567-8901'
      },
      {
        title: 'Email',
        icon: '',
        address: 'contact@example.com'
      },
      {
        title: 'Live chat',
        icon: '',
        link: 'www.example.com',
        address: 'Click to chat'
      }
    ]
  }

}
