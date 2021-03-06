import { Injectable } from '@angular/core';
import { BussinessModel } from './business-model';

@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {

  constructor() { }

  public getContactUsInformation(): BussinessModel {

    // If there was an api , then this function had to be some changed . 
    // and also should return api response . so we could make our own deserialize 
    // to map backend respons to our model .

    return {
      services :
        [{
          serviceName: 'Service #1',
        },
        {
          serviceName: 'Service #2',
        },
        {
          serviceName: 'Service #3',
        },
        {
          serviceName: 'Service #4',
          features: [
            {
              serviceName: 'Feature #1',
            },
            {
              serviceName: 'Feature #2',
            },
          ]
        },
        {
          serviceName: 'Service #5',
        }],
      additionals:
      [
        {
        serviceName: 'Additional Services #1',
        },
        {
        serviceName: 'Additional Services #2',
        },
        {
        serviceName: 'Additional Services #3',
        },
        {
        serviceName: 'Additional Services #4',
        features: [
          {
            serviceName: 'Additional Feature #1',
          },
          {
            serviceName: 'Additional Feature #2',
          },
        ]
        },
        {
        serviceName: 'Additional Services #5',
      }],
    }
  }
}
