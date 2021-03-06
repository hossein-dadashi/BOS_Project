import { Component, Input } from '@angular/core';
import { ContactInformationModel } from '../../contact-info.model';

@Component({
  selector: 'bos-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {

  @Input('information') information: ContactInformationModel;

  constructor() { }

  showLink(link: string) {
    alert(`Your request has been sent for ${link}`);
  }

}
