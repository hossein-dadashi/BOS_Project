import { Component, OnInit } from '@angular/core';
import { ContactInformationModel } from '../../contact-info.model';
import { ContactDataService } from '../../contact-data.service';

@Component({
  selector: 'bos-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  informations: ContactInformationModel[];

  constructor(
    private contactDataService: ContactDataService
  ) { }

  ngOnInit() {
    this.getContactInformation();
  }

  // Getting contact information
  public async getContactInformation() {
    this.informations = await this.contactDataService.getContactUsInformation();
  }

}
