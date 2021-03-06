import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


@NgModule({
  declarations: [
    InfoCardComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule,
  ]
})
export class ContactUsModule { }
